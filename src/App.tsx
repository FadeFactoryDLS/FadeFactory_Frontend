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
import Footer from './components/Footer';

const App: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: 'url(https://cdn2.vectorstock.com/i/1000x1000/44/11/hair-salon-background-07-vector-28144411.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vw',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div style={backgroundStyle}>
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/admin/dashboard" element={<ProtectedRoute element={<Dashboard />} requiredRole="Admin" />} />
          <Route path="/login" element={<PublicRoute element={<Login />} redirectPath="/" />} />
          <Route path="/logout" element={<UserLogout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
    </div>
  );
};

export default App;