import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Home from './pages/Home';
import Login from './pages/Login/Login'
import Account from './pages/Account'
import About from './pages/About'
import Post from './pages/Post'
function App() {
  return (
    <>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/post' element={<Post />} />
          </Routes>
        </AuthContextProvider>
    </>
  );
}

export default App;
