import { Outlet } from "react-router";
import Navbar from "./components/features/navigation/Navbar";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-200">
      <Navbar />
      <div className="flex justify-center p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
