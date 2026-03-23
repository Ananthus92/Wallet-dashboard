function BalanceCard({ balance, setBalance, setRefresh }){

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <h2 className="text-gray-400">Total Balance</h2>

<p className="text-4xl font-bold text-green-400 mt-2">
            {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(balance)}
      </p>

      <div className="flex gap-3 mt-4">

  <button 
  onClick={async () => {
    const res = await fetch("https://wallet-dashboard-1.onrender.com/deposit?amount=1000", {
      method: "POST",
    });

    const data = await res.json();

    setBalance(prev => prev + data.amount);
    setRefresh(prev => !prev);
  }}
  className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded"
>
  Add Money
</button>

  <button 
  onClick={async () => {
    if (balance >= 500) {
      const res = await fetch("https://wallet-dashboard-1.onrender.com/withdraw?amount=500", {
        method: "POST",
      });

      const data = await res.json();

      setBalance(prev => prev - data.amount);
      setRefresh(prev => !prev);
    } else {
      alert("Insufficient balance");
    }
  }}
  className="bg-green-500 hover:bg-red-600 transition px-4 py-2 rounded"
>
  Withdraw
</button>

</div>
    </div>
  );
}

export default BalanceCard;