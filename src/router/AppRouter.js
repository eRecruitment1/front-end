import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import About from '../pages/About/About'
import Post from '../pages/Post/PostDetail'
import DashBoard from '../pages/Admin/DashBoard'
import Profile from '../pages/Profile/Profile';
import Career from '../pages/Career/Career';
import CreatePost from '../pages/Post/CreatePost'
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path='/career' element={<Career />} />
            <Route path='/upload' />
            <Route path='/post/create' element={<CreatePost />} />
            <Route path='/post/update'/>
            <Route path='/user/profile' element={<Profile />} />
            <Route path='/admin/dashboard' element={<DashBoard />} />
            <Route path='*' />
        </Routes>
    )
}

export default AppRouter