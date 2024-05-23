import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AdminDashboard from './components/Admin/Dashboard';
import BookedAppointments from './components/Admin/BookedAppointments';
import BookAppointment from './components/User/BookAppointment';
import Login from './components/User/Login';
import Logout from './components/User/Logout';
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
          <Route path="/user/book" element={<BookAppointment />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/logout" element={<Logout />} />
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