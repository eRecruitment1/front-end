import React from 'react';
import { Route, Routes } from 'react-router-dom'
import {AuthContextProvider} from './context/AuthContext'
import Home from './pages/Home';
import Login from './pages/Login/Login'
import Account from './pages/Account'
import About from './pages/About'
function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
