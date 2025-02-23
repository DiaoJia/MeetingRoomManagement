import { Routes, Route } from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard";
import User from "../pages/User/User";
import NoMatch from "../pages/NoMatch/NoMatch";
import AddUser from "../pages/User/AddUser";
import Login from "../pages/Login/Login";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import MeetingRoom from "../pages/MeetingRoom/MeetingRoom";
import AddMeetingRoom from "../pages/MeetingRoom/AddMeetingRoom";
import BookingRoom from "../pages/BookingRoom/BookingRoom";

function AppRoutes() {
    const { isAuthenticated } = useAuth();
    return (
        <Routes>
            <Route path="/login" element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/" element={<MainLayout isAuthenticated={isAuthenticated} />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<User />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/rooms" element={<MeetingRoom />} />
                <Route path="/add-room" element={<AddMeetingRoom />} />
                <Route path="/booking" element={<BookingRoom />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
        </Routes>);
}

export default AppRoutes;