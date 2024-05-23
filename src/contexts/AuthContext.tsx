import React, { createContext, useContext, useState, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';

interface AuthContextProps {
    isAuthenticated: boolean;
    role: string;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [role, setRole] = useState<string>('');

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        const decoded: any = jwtDecode(token);
        setRole(decoded.role);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setRole('');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};