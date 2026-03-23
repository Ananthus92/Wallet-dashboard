import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("https://wallet-dashboard-1.onrender.com/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, []);

  //
  const chartData = transactions.reduce((acc, t, i) => {
    const prevBalance =
      acc.length > 0 ? acc[acc.length - 1].balance : 0;

    const type = t.type?.toLowerCase().trim();

    let newBalance = prevBalance;

    if (type === "deposit") {
      newBalance += t.amount;
    } else if (type === "withdraw") {
      newBalance -= t.amount;
    }

    acc.push({
      name: `${i + 1}`,
      balance: newBalance,
    });

    return acc;
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg">
      
      <h2 className="mb-1 text-lg font-semibold">
        Wallet Performance
      </h2>

      <p className="text-sm text-gray-400 mb-4">
        Track your balance growth over time
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />

          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
            formatter={(value) =>
              new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(value)
            }
          />

          <Area
            type="monotone"
            dataKey="balance"
            stroke="#22c55e"
            fill="url(#colorBalance)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}

export default Chart;