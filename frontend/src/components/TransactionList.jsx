import { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

function TransactionList({ refresh }) {
  const [transactions, setTransactions] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);

  //  Fetch data 
  useEffect(() => {
    fetch("http://127.0.0.1:8000/transactions")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.id - a.id);
        setTransactions(sorted);
      })
      .catch((err) => {
        console.error("Error fetching transactions:", err);
      });
  }, [refresh]);

  //  Closes the menu when clicking outside
  useEffect(() => {
    const handleClick = () => setActiveMenu(null);
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-xl h-full">
      <h2 className="mb-4 text-lg font-semibold">Transaction History</h2>

      {transactions.length === 0 && (
        <p className="text-gray-400">No transactions yet</p>
      )}

      <div className="flex flex-col gap- max-h-96 overflow-y-auto pr-2">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="bg-gray-700 p-4 rounded-lg flex justify-between items-center relative hover:bg-gray-600 transition"
          >
            {/* LEFT */}
            <div>
              <span className="capitalize flex items-center gap-2 font-medium">
                {t.type === "deposit" ? "💰" : "💸"} {t.type}
              </span>

            
              <p className="text-xs text-gray-400">
                {t.created_at
                  ? new Date(t.created_at).toLocaleString()
                  : "Just now"}
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <span
                className={
                  t.type === "deposit"
                    ? "text-green-400 font-semibold"
                    : "text-red-400 font-semibold"
                }
              >
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(t.amount)}
              </span>

              {/* 3 DOT MENU */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative"
              >
                <FaEllipsisV
                  className="cursor-pointer text-gray-400 hover:text-white"
                  onClick={() =>
                    setActiveMenu(activeMenu === t.id ? null : t.id)
                  }
                />

                {/* DROPDOWN */}
                {activeMenu === t.id && (
                  <div
                    className="absolute right-0 top-8 bg-gray-800 border border-gray-600 rounded shadow-lg p-2 w-32 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p className="hover:bg-gray-700 p-2 cursor-pointer rounded">
                      View
                    </p>
                    <p className="hover:bg-gray-700 p-2 cursor-pointer rounded text-red-400">
                      Delete
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;