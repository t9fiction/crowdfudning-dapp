// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";

contract HelperConfig is Script {
    struct NetworkConfig {
        uint256 deployerkey;
    }

    NetworkConfig public activeNetworkConfig;

    // Following is private key from Anvil so .... no worries with it
    uint256 public DEFAULT_ANVIL_PRIVATE_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;

    constructor() {
        if (block.chainid == 11155111) {
            activeNetworkConfig = getSepoliaEthConfig();
        } else {
            activeNetworkConfig = getOrCreateAnvilConfig();
        }
    }

    function getSepoliaEthConfig() public view returns (NetworkConfig memory) {
        return NetworkConfig({deployerkey: vm.envUint("PRIVATE_KEY")});
    }

    function getOrCreateAnvilConfig() public view returns (NetworkConfig memory) {
        return NetworkConfig({deployerkey: DEFAULT_ANVIL_PRIVATE_KEY});
    }
}
