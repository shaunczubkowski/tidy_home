import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";
import ManageRooms from "./pages/ManageRooms";
import ManageTasks from "./pages/ManageTasks";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/settings/manage-rooms" element={<ManageRooms /> } /> 
          <Route path="/settings/manage-tasks" element={<ManageTasks /> } />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
}

export default App;
