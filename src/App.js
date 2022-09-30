import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Home from './pages/Home/Home';
import About from './pages/About'
import Post from './pages/Post'
import DashBoard from './pages/Admin/DashBoard'
function App() {
  return (
    <>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/post' element={<Post />} />
            <Route path='/admin/dashboard' element={<DashBoard />} />
          </Routes>
        </AuthContextProvider>
    </>
  );
}

export default App;
