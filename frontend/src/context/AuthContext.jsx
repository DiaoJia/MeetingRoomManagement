import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'true'
    );
    const navigate = useNavigate();

    const login = (email, password) => {
        console.log(email, password);
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
    };
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};