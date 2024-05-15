import React, { createContext, useState, useContext, ReactNode } from 'react';

type AuthContextType = {
    isAuthenticated: boolean;
    login: (role: string) => void;
    logout: () => void;
    role: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState<string | null>(null);

    const login = (role: string) => {
        setIsAuthenticated(true);
        setRole(role);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setRole(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, role }}>
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
