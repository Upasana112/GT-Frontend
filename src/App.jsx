import ScheduleTable from "./components/ScheduleTable";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <ScheduleTable />
      </main>
      
    </div>
  );
};

export default App;
