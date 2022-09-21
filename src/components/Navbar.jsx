import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-2xl'><span className='text-purple-500'>WeHr</span>Company</h1>
      <div>
        Home
      </div>
      <div>
      <button className='text-black pr-4'>Sign In</button>
      <button className='bg-purple-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
      </div>
    </div>
    </>
  )
}

export default Navbar