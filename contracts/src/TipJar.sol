// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title TipJar
/// @notice A decentralized tipping platform
/// @dev TODO: Implement this contract!
contract TipJar {
    // TODO: Define structs
    struct Creator {
        string name;
        uint256 totalTips;
        bool registered;
    }
    
    // TODO: Define state variables
    mapping(address => Creator) public creators;
    
    // TODO: Define events
    event CreatorRegistered(address indexed creator, string name);
    event TipSent(address indexed from, address indexed to, uint256 amount);
    event Withdrawal(address indexed creator, uint256 amount);
    
    /// @notice Register as a creator
    /// @param name Display name for the creator
    function register(string calldata name) external {
        // TODO: Implement
        // - Check not already registered
        // - Store creator info
        // - Emit event
    }
    
    /// @notice Send a tip to a creator
    /// @param creator Address of the creator to tip
    function tip(address creator) external payable {
        // TODO: Implement
        // - Check creator is registered
        // - Check tip amount > 0
        // - Update creator's total tips
        // - Emit event
    }
    
    /// @notice Withdraw accumulated tips
    function withdraw() external {
        // TODO: Implement
        // - Check caller is registered creator
        // - Check has tips to withdraw
        // - Transfer tips to creator
        // - Reset tip balance
        // - Emit event
    }
    
    /// @notice Check if address is a registered creator
    function isCreator(address addr) external view returns (bool) {
        return creators[addr].registered;
    }
    
    /// @notice Get creator info
    function getCreator(address addr) external view returns (string memory name, uint256 totalTips) {
        Creator memory c = creators[addr];
        return (c.name, c.totalTips);
    }
}
