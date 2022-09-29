import React from 'react'
import Footer from '../components/Footer'
import NewestPosts from '../components/NewestPosts'
import Navbar from '../components/Navbar'
import About from '../pages/About'
const Home = () => {
  return (
    <>
        <Navbar />
        <About />
        <NewestPosts />
        <Footer />
    </>
  )
}

export default Home