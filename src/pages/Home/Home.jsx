import React from 'react'
import Footer from '../../components/Footer'
import NewestPosts from '../../components/NewestPosts'
import Navbar from '../../components/Header/Navbar'
import Main from './Main'
const Home = () => {
  return (
    <>
        <Navbar />
        <Main />
        <NewestPosts />
        <Footer />
    </>
  )
}

export default Home