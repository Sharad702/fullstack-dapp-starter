// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/TipJar.sol";

contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);
        
        TipJar tipJar = new TipJar();
        
        console.log("TipJar deployed to:", address(tipJar));
        
        vm.stopBroadcast();
    }
}
