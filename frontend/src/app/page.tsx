export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">🫙 TipJar</h1>
        <p className="text-gray-400 mb-8">
          Web3Proof Challenge — Build a fullstack tipping dApp
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Connect Wallet */}
          <section className="p-6 border border-dashed border-gray-700 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">1. Connect Wallet</h2>
            <div className="p-4 bg-gray-900 rounded-lg text-gray-500 text-sm font-mono">
              {"// TODO: Add wallet connection"}
            </div>
          </section>

          {/* Register as Creator */}
          <section className="p-6 border border-dashed border-gray-700 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">2. Register as Creator</h2>
            <div className="p-4 bg-gray-900 rounded-lg text-gray-500 text-sm font-mono">
              {"// TODO: Registration form"}
            </div>
          </section>

          {/* Send Tip */}
          <section className="p-6 border border-dashed border-gray-700 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">3. Send Tip</h2>
            <div className="p-4 bg-gray-900 rounded-lg text-gray-500 text-sm font-mono">
              {"// TODO: Tip form with amount"}
            </div>
          </section>

          {/* Creator Dashboard */}
          <section className="p-6 border border-dashed border-gray-700 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">4. Withdraw Tips</h2>
            <div className="p-4 bg-gray-900 rounded-lg text-gray-500 text-sm font-mono">
              {"// TODO: Show balance + withdraw button"}
            </div>
          </section>
        </div>

        <div className="mt-8 p-4 bg-gray-900 rounded-xl">
          <h3 className="font-semibold mb-2">📋 Implementation Steps</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>□ Install wagmi, viem, @rainbow-me/rainbowkit</li>
            <li>□ Configure for Sepolia testnet</li>
            <li>□ Complete TipJar.sol contract</li>
            <li>□ Deploy to Sepolia</li>
            <li>□ Add contract ABI to frontend/src/lib/contract.ts</li>
            <li>□ Implement register, tip, withdraw UI</li>
            <li>□ Add transaction status feedback</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
