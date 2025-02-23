import { Routes, Route } from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard";
import User from "../pages/User/User";
import Meeting from "../pages/Meeting/Meeting";
import NoMatch from "../pages/NoMatch/NoMatch";
import AddUser from "../pages/User/AddUser";
import Login from "../pages/Login/Login";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
    const { isAuthenticated } = useAuth();
    return (
        <Routes>
            <Route path="/login" element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/" element={<MainLayout isAuthenticated={isAuthenticated} />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/user" element={<User />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/meeting" element={<Meeting />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
        </Routes>);
}

export default AppRoutes;