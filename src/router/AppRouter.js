import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import About from '../pages/About/About'
import Post from '../pages/Post/PostDetail'
import Blog from '../pages/Blog/Blog'
import Contact from '../pages/Contact/Contact'
import DashBoard from '../pages/Admin/DashBoard'
import Profile from '../pages/Profile/Profile';
import Career from '../pages/Career/Career';
import CreatePost from '../pages/Post/HR_Section/CreatePost'
import HRPostDetail from '../pages/Post/HR_Section/HRPostDetail';
import ViewPosts from '../pages/Post/HR_Section/ViewPosts';
import UploadCV from '../pages/UploadCV/UploadCV';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import ViewCV from '../pages/CV/ViewCV';
import ViewSchedule from '../pages/Schedule/ViewSchedule';
import ViewNote from '../pages/Note/ViewNote';
const AppRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/post/:id' element={<Post />} />
                <Route path='/career' element={<Career />} />
                <Route path='/upload/:id' element={<UploadCV />}/>
                <Route path='/blog' element={<Blog />} />
                <Route path='/hr/post/view' element={<ViewPosts />} />
                <Route path='/hr/post/create' element={<CreatePost />} />
                <Route path='/hr/post/:id' element={<HRPostDetail />} />
                <Route path='/hr/cv/view' element={<ViewCV />} />
                <Route path='/hr/schedule/view' element={<ViewSchedule />} />
                <Route path='/hr/note/view' element={<ViewNote />} />
                <Route path='/user/profile' element={<Profile />} />
                <Route path='/admin/dashboard' element={<DashBoard />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' />
            </Routes>
            <Footer />
        </div>
    )
}

export default AppRouter