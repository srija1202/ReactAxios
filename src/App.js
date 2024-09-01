import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetailsPage from './pages/UserDetailsPage';
import AppNavbar from './components/Navbar';
import UserEditPage from './pages/UserEditPage';
import UserForm from './components/UserForm';

const App = () => (
  <Router>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:id" element={<UserDetailsPage />} />
      <Route path="/edit/:id" element={<UserEditPage />} />
      <Route path="/add-user" element={<UserForm />}/>
    </Routes>
  </Router>
);

export default App;
