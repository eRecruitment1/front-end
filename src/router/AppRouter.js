import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import About from '../pages/About'
import Post from '../pages/Post'
import DashBoard from '../pages/Admin/DashBoard'
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/post' element={<Post />} />
            <Route path='/admin/dashboard' element={<DashBoard />} />
        </Routes>
    )
}

export default AppRouter