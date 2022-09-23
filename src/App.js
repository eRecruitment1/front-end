import React from 'react';
import { Route, Routes } from 'react-router-dom'
import {AuthContextProvider} from './context/AuthContext'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login'
import Account from './pages/Account'
function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
