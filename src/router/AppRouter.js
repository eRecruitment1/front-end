import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import About from '../pages/About/About'
import Post from '../pages/Post/PostDetail'
import DashBoard from '../pages/Admin/DashBoard'
import Profile from '../pages/Profile/Profile';
import Career from '../pages/Career/Career';
import CreatePost from '../pages/Post/HR_Section/CreatePost'
import HR_PostDetail from '../pages/Post/HR_Section/HRPostDetail';
import ViewPosts from '../pages/Post/HR_Section/ViewPosts';
const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/post/:id' element={<Post />} />
                <Route path='/career' element={<Career />} />
                <Route path='/upload' />
                <Route path='/hr/post/view' element={<ViewPosts />} />
                <Route path='/hr/post/create' element={<CreatePost />} />
                <Route path='/hr/post/:id' element={<HR_PostDetail />} />
                <Route path='/user/profile' element={<Profile />} />
                <Route path='/admin/dashboard' element={<DashBoard />} />
                <Route path='*' />
            </Routes>
        </div>
    )
}

export default AppRouter