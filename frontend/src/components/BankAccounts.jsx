function BankAccounts() {
  const accounts = [
    { id: 1, name: "SBI Bank", balance: 500000 },
    { id: 2, name: "HDFC Bank", balance: 120353 },
    { id: 3, name: "ICICI Bank", balance: 110353 },
    { id: 4, name: "AXIS Bank", balance: 75869},
  ]

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="mb-4 text-lg">Bank Accounts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {accounts.map((acc) => (
          <div
            key={acc.id}
            className="bg-gray-700 p-4 rounded-lg"
          >
            <p className="text-sm text-gray-400">{acc.name}</p>
            <p className="text-green-400 text-lg">
              {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(acc.balance)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BankAccounts