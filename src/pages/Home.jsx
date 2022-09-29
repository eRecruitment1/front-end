import React from 'react'
import Footer from '../components/Footer'
import NewestPosts from '../components/NewestPosts'
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <>
        <Navbar />
        <NewestPosts />
        <Footer />
    </>
  )
}

export default Home