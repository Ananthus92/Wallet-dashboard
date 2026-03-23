import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center mb-6">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <FaUserCircle size={32} />

        <div>
          <p className="text-sm text-gray-400">Welcome</p>
          <p className="font-semibold">Ananthu</p> {/* change name */}
        </div>

        <div className="flex gap-4 ml-6 text-gray-400">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="hover:text-white cursor-pointer">Settings</span>
        </div>
      </div>

      {/* RIGHT */}
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-800 px-4 py-2 rounded w-64"
      />
    </div>
  );
}

export default Navbar;