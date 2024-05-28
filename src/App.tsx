import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Admin/Dashboard';
import Login from './components/User/Login';
import UserLogout from './components/User/Logout';
import Register from './components/User/Register';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Home from './components/Home';
import Bookings from './components/User/Bookings';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/admin/dashboard" element={<ProtectedRoute element={<Dashboard />} requiredRole="Admin" />} />
          <Route path="/login" element={<PublicRoute element={<Login />} redirectPath="/" />} />
          <Route path="/logout" element={<UserLogout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<ProtectedRoute element={<Bookings />} requiredRole="User" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;