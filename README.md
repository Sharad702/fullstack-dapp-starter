# Fullstack Mini dApp Challenge

> Web3Proof Challenge — Prove you can ship end-to-end

## 🎯 Objective

Build a complete **Tip Jar dApp** — smart contract + frontend.

## 📋 Requirements

### Smart Contract
- [ ] Users can send tips (ETH) to creators
- [ ] Creators can register their profile
- [ ] Creators can withdraw accumulated tips
- [ ] Track total tips per creator
- [ ] Emit events for all actions
- [ ] Deploy to Sepolia testnet

### Frontend
- [ ] Connect wallet
- [ ] List registered creators
- [ ] Send tip to a creator
- [ ] View tip history
- [ ] Creator dashboard to withdraw
- [ ] Transaction status feedback
- [ ] Mobile responsive

## 🛠 Setup

```bash
git clone https://github.com/YOUR_USERNAME/fullstack-dapp-starter
cd fullstack-dapp-starter

# Contract
cd contracts
forge install
forge build

# Frontend
cd ../frontend
npm install
npm run dev
```

## 📁 Structure

```
├── contracts/
│   ├── src/
│   │   └── TipJar.sol          # Your contract
│   ├── test/
│   │   └── TipJar.t.sol        # Tests
│   ├── script/
│   │   └── Deploy.s.sol        # Deploy script
│   └── foundry.toml
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   └── lib/
│   │       └── contract.ts     # ABI + address
│   └── package.json
│
└── README.md
```

## 📝 Contract Interface

```solidity
interface ITipJar {
    function register(string calldata name) external;
    function tip(address creator) external payable;
    function withdraw() external;
    
    function creators(address) external view returns (string memory name, uint256 totalTips);
    function isCreator(address) external view returns (bool);
}
```

## 🚀 Deployment

```bash
cd contracts

# Deploy to Sepolia
forge script script/Deploy.s.sol --rpc-url $SEPOLIA_RPC --broadcast --verify

# Save the deployed address to frontend/src/lib/contract.ts
```

## ✅ Evaluation Criteria

| Criteria | Points |
|----------|--------|
| Contract functionality | 25 |
| Contract security | 15 |
| Contract tests | 10 |
| Frontend wallet integration | 15 |
| Frontend UI/UX | 15 |
| Transaction handling | 10 |
| Deployed to Sepolia | 10 |

**Pass threshold: 60/100**

## 💡 Tips

- Use wagmi hooks: `useContractRead`, `useContractWrite`
- Show pending/success/error states for transactions
- Use `waitForTransactionReceipt` for confirmation
- Test on Sepolia before submitting
- Get testnet ETH from [sepoliafaucet.com](https://sepoliafaucet.com)

## 📤 Submission

1. Fork this repository
2. Build contract + frontend
3. Deploy contract to Sepolia
4. Update `contract.ts` with deployed address
5. Submit on [Web3Proof](https://web3proof.dev)

---

Good luck! 🚀
