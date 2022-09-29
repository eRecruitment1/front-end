import React from 'react';
import { Route, Routes } from 'react-router-dom'
import {AuthContextProvider} from './context/AuthContext'
import Home from './pages/Home';
import LoginWithGoogle from './pages/Login/LoginWithGoogle'
import Account from './pages/Account'
function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginWithGoogle />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
