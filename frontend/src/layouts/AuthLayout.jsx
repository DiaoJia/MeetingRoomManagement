import { Outlet } from "react-router";
import { Container } from "@mui/material";

function AuthLayout() {
    return (
        <Container maxWidth="sm">            
            <Outlet />
        </Container>
    );
}

export default AuthLayout;