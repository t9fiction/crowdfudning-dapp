// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {CrowdFunding} from "src/CrowdFunding.sol";
import {DeployCrowdFunding} from "script/DeployCrowdFunding.s.sol";
import {HelperConfig} from "script/HelperConfig.s.sol";

contract TestCrowdFunding is Test {
    CrowdFunding public crowdFunding;
    DeployCrowdFunding public deployer;
    HelperConfig public helperConfig;
    address owner = address(0x123);
    address donator1 = address(0x456);
    address donator2 = address(0x789);

    function setUp() public {
        deployer = new DeployCrowdFunding();
        (crowdFunding, helperConfig)=deployer.run();
    }

    function testCreateCampaign() public {
        vm.prank(owner);
        uint256 campaignId = crowdFunding.createCampaign(
            owner, "Campaign 1", "Description 1", 1 ether, block.timestamp + 7 days, "image-url-1"
        );

        (
            address _owner,
            string memory title,
            string memory description,
            uint256 target,
            uint256 deadline,
            uint256 amountCollected,
        ) = crowdFunding.campaigns(campaignId);
        assertEq(_owner, owner);
        assertEq(title, "Campaign 1");
        assertEq(description, "Description 1");
        assertEq(target, 1 ether);
        assertEq(deadline, block.timestamp + 7 days);
        assertEq(amountCollected, 0);
    }

    // function testDonateToCampaign() public {
    //     vm.prank(owner);
    //     uint256 campaignId = crowdFunding.createCampaign(
    //         owner, "Campaign 1", "Description 1", 1 ether, block.timestamp + 7 days, "image-url-1"
    //     );

    //     vm.deal(donator1, 1 ether);
    //     vm.prank(donator1);
    //     crowdFunding.donateToCampaign{value: 1 ether}(campaignId);

    //     (,,,,, uint256 amountCollected,,) = crowdFunding.campaigns(campaignId);
    //     assertEq(amountCollected, 1 ether);

    //     (address[] memory donators, uint256[] memory donations) = crowdFunding.getDonators(campaignId);
    //     assertEq(donators.length, 1);
    //     assertEq(donators[0], donator1);
    //     assertEq(donations[0], 1 ether);
    // }

    function testGetCampaigns() public {
        vm.prank(owner);
        uint256 campaignId1 = crowdFunding.createCampaign(
            owner, "Campaign 1", "Description 1", 1 ether, block.timestamp + 7 days, "image-url-1"
        );

        vm.prank(owner);
        uint256 campaignId2 = crowdFunding.createCampaign(
            owner, "Campaign 2", "Description 2", 2 ether, block.timestamp + 14 days, "image-url-2"
        );

        CrowdFunding.Campaign[] memory campaigns = crowdFunding.getCampaigns();

        assertEq(campaigns.length, 2);
        assertEq(campaigns[0].title, "Campaign 1");
        assertEq(campaigns[1].title, "Campaign 2");
    }

    function testFailCreateCampaignWithPastDeadline() public {
    vm.expectRevert(CrowdFunding.CrowdFunding__InvalidDeadline.selector); // Expect revert with the specific error message
    vm.prank(owner);
    crowdFunding.createCampaign(
        owner, 
        "Campaign 1", 
        "Description 1", 
        1 ether, 
        block.timestamp - 1 days, 
        "image-url-1"
    );
}

    function testFailDonateToNonExistentCampaign() public {
        vm.prank(donator1);
        crowdFunding.donateToCampaign{value: 1 ether}(999); // Non-existent campaign ID
    }
}
