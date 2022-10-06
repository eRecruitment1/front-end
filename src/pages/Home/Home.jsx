import React from 'react'
import Footer from '../../components/Footer'
import NewestPosts from './NewestPosts'
import Navbar from '../../components/Header/Navbar'
import Main from './Main'
const Home = () => {
  return (
    <>
      <div className='h-screen'>
        <Navbar />
        <Main />
        <NewestPosts />
        <Footer />
      </div>
    </>
  )
}

export default Home