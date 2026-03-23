import Navbar from "./components/navbar";
import BalanceCard from "./components/BalanceCard";
import StatsCard from "./components/StatsCards"
import TransactionList from "./components/TransactionList";
import BankAccounts from "./components/BankAccounts";
import WalletAccounts from "./components/WalletAccounts";
import Chart from "./components/charts";

import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [balance, setBalance] = useState(45231.89);

  return (
    <div className="bg-black min-h-screen text-white p-6 overflow-hidden">
      <div className="w-full px-8">

        <h1 className="text-2xl mb-6 mt-4 font-semibold">
          Wallet Dashboard
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-1 space-y-6">
            <Navbar />
            <BalanceCard
              balance={balance}
              setBalance={setBalance}
              setRefresh={setRefresh}
            />
           
            <StatsCard />
            <BankAccounts />
            <WalletAccounts />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Chart />
            <TransactionList refresh={refresh} />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;