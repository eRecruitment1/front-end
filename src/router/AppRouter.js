import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import About from '../pages/About'
import Post from '../pages/Post'
import DashBoard from '../pages/Admin/DashBoard'
import Profile from '../pages/Profile/Profile';
import Career from '../pages/Career/Career';
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/post' element={<Post />} />
            <Route path='/career' element={<Career />} />
            <Route path='/upload' element={<Career />} />
            <Route path='/user/profile' element={<Profile />} />
            <Route path='/admin/dashboard' element={<DashBoard />} />
            
        </Routes>
    )
}

export default AppRouter