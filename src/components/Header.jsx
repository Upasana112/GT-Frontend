const Header = ({ setIsModalOpen }) => (
    <header className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">Schedule</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        + New Customer
      </button>
    </header>
  );
  
  export default Header;
  