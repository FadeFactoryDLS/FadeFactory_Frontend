import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AdminDashboard from './components/Admin/Dashboard';
import BookedAppointments from './components/Admin/BookedAppointments';
import AdminLogin from './components/Admin/Login';
import AdminLogout from './components/Admin/Logout';
import BookAppointment from './components/User/BookAppointment';
import Login from './components/User/Login';
import UserLogout from './components/User/Logout';
import Register from './components/User/Register';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/appointments" element={<BookedAppointments />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/logout" element={<AdminLogout />} />
          <Route path="/user/book" element={<BookAppointment />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/logout" element={<UserLogout />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <h1>Available appointments</h1>
      
    </div>
  );
};

export default App;