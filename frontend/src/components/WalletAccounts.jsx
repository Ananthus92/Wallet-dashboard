function WalletAccounts() {
  const wallets = [
    { id: 1, name: "Paytm", balance: 10000 },
    { id: 2, name: "PhonePe", balance: 5000 },
    { id: 3, name: "Google Pay", balance: 8000 },
    { id: 4, name: "Amazon Pay", balance: 4500},
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="mb-4 text-lg">Wallet Accounts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className="bg-gray-700 p-4 rounded-lg hover:scale-105 transition"
          >
            <p className="text-sm text-gray-400">{wallet.name}</p>

            <p className="text-green-400 text-lg">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(wallet.balance)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WalletAccounts;