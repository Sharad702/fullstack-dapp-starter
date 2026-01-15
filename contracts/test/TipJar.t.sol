// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/TipJar.sol";

contract TipJarTest is Test {
    TipJar public tipJar;
    address public creator1;
    address public creator2;
    address public tipper;

    function setUp() public {
        tipJar = new TipJar();
        creator1 = makeAddr("creator1");
        creator2 = makeAddr("creator2");
        tipper = makeAddr("tipper");
        
        vm.deal(tipper, 10 ether);
    }

    function test_Register() public {
        vm.prank(creator1);
        tipJar.register("Alice");
        
        assertTrue(tipJar.isCreator(creator1));
        (string memory name, ) = tipJar.getCreator(creator1);
        assertEq(name, "Alice");
    }

    function test_Tip() public {
        // Register creator
        vm.prank(creator1);
        tipJar.register("Alice");
        
        // Send tip
        vm.prank(tipper);
        tipJar.tip{value: 1 ether}(creator1);
        
        (, uint256 totalTips) = tipJar.getCreator(creator1);
        assertEq(totalTips, 1 ether);
    }

    function test_Withdraw() public {
        // Register and receive tip
        vm.prank(creator1);
        tipJar.register("Alice");
        
        vm.prank(tipper);
        tipJar.tip{value: 1 ether}(creator1);
        
        // Withdraw
        uint256 balanceBefore = creator1.balance;
        vm.prank(creator1);
        tipJar.withdraw();
        
        assertEq(creator1.balance, balanceBefore + 1 ether);
    }

    function testFail_TipUnregistered() public {
        vm.prank(tipper);
        tipJar.tip{value: 1 ether}(creator1);
    }

    function testFail_WithdrawNotCreator() public {
        vm.prank(tipper);
        tipJar.withdraw();
    }
}
