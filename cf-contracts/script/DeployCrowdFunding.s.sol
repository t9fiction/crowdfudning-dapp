// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {CrowdFunding} from "src/CrowdFunding.sol";
import {HelperConfig} from "script/HelperConfig.s.sol";

contract DeployCrowdFunding is Script {
    function run() external returns (CrowdFunding) {
        HelperConfig helperConfig = new HelperConfig();
        (uint256 deployerKey) = helperConfig.activeNetworkConfig();
        console.log("Deployment of Crowd Funding");
        vm.startBroadcast(deployerKey);
        CrowdFunding cfunding = new CrowdFunding();
        vm.stopBroadcast();
        return cfunding;
    }
}
