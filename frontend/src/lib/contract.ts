// TODO: Update after deploying to Sepolia
export const TIPJAR_ADDRESS = "0x..." as const;

export const TIPJAR_ABI = [
  {
    type: "function",
    name: "register",
    inputs: [{ name: "name", type: "string" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tip",
    inputs: [{ name: "creator", type: "address" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isCreator",
    inputs: [{ name: "addr", type: "address" }],
    outputs: [{ type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCreator",
    inputs: [{ name: "addr", type: "address" }],
    outputs: [
      { name: "name", type: "string" },
      { name: "totalTips", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "CreatorRegistered",
    inputs: [
      { name: "creator", type: "address", indexed: true },
      { name: "name", type: "string", indexed: false },
    ],
  },
  {
    type: "event",
    name: "TipSent",
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "amount", type: "uint256", indexed: false },
    ],
  },
  {
    type: "event",
    name: "Withdrawal",
    inputs: [
      { name: "creator", type: "address", indexed: true },
      { name: "amount", type: "uint256", indexed: false },
    ],
  },
] as const;
