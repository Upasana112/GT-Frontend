const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-gray-200 h-full flex flex-col shadow-lg">
      <div className="px-6 py-6 text-2xl font-bold text-white tracking-wide border-b border-gray-700">
        NEXUS
      </div>
      <nav className="mt-6">
        <a
          href="#"
          className="block px-6 py-3 hover:bg-gray-700 rounded-md transition duration-300"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="block px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-md transition duration-300"
        >
          Schedule
        </a>
        <a
          href="#"
          className="block px-6 py-3 hover:bg-gray-700 rounded-md transition duration-300"
        >
          Customers
        </a>
        <a
          href="#"
          className="block px-6 py-3 hover:bg-gray-700 rounded-md transition duration-300"
        >
          Coachings
        </a>
        <a
          href="#"
          className="block px-6 py-3 hover:bg-gray-700 rounded-md transition duration-300"
        >
          Attendance
        </a>
      </nav>
      <div className="mt-auto p-6 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-3 rounded-full text-white shadow">
            <span className="text-sm font-medium">UK</span>
          </div>
          <div>
            <p className="text-white font-medium">Admin</p>
            <p className="text-sm text-gray-400">Upasana - IEC2021112</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
