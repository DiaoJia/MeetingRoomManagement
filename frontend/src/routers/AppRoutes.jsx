import { Routes, Route } from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard";
import User from "../pages/User/User";
import Meeting from "../pages/Meeting/Meeting";
import NoMatch from "../pages/NoMatch/NoMatch";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/meeting" element={<Meeting />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>);
}

export default AppRoutes;