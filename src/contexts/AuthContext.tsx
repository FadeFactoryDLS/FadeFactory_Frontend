import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { CLAIMS } from '../constants';

interface AuthContextProps {
    isAuthenticated: boolean;
    role: string;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface DecodedToken {
    exp: number;
    [CLAIMS.ROLE]: string;
    [CLAIMS.EMAIL]: string;
}

const isTokenExpired = (token: string): boolean => {
    const decoded: DecodedToken = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [role, setRole] = useState<string>('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && !isTokenExpired(token)) {
            const decoded: DecodedToken = jwtDecode(token);
            setIsAuthenticated(true);
            setRole(decoded[CLAIMS.ROLE]);
            localStorage.setItem('userEmail', decoded[CLAIMS.EMAIL]);
            console.log(decoded[CLAIMS.EMAIL])
        } else {
            localStorage.removeItem('token');
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        const decoded: DecodedToken = jwtDecode(token);
        setRole(decoded[CLAIMS.ROLE]);
        localStorage.setItem('userEmail', decoded[CLAIMS.EMAIL]);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setRole('');
        localStorage.removeItem('userEmail');
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