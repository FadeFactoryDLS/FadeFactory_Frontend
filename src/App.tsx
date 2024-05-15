import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AdminDashboard from './components/Admin/AdminDashboard';
import BookedAppointments from './components/Admin/BookedAppointments';
import AdminLogin from './components/Admin/Login';
import AdminLogout from './components/Admin/Logout';
import UserDashboard from './components/User/UserDashboard';
import BookAppointment from './components/User/BookAppointment';
import UserLogin from './components/User/Login';
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
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/book" element={<BookAppointment />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/logout" element={<UserLogout />} />
          <Route path="/user/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
