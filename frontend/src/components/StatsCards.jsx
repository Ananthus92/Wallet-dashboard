function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-800 p-4 rounded-xl">
        <p className="text-gray-400 text-sm">Referral</p>
        <p className="text-lg">2362 INR</p>
        <p className="text-xs text-green-400">+20.1% from last month</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl">
        <p className="text-gray-400 text-sm">Bonus</p>
        <p className="text-lg">2362 INR</p>
        <p className="text-xs text-green-400">+20.1% from last month</p>
      </div>
    </div>
  );
}

export default StatsCards;