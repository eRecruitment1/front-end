import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginWithGoogle from '../../pages/Login/LoginWithGoogle';
import UserDropDownMenu from './UserDropDownMenu'
import { motion } from "framer-motion";
import Login from '../../pages/Login/Login'
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  let isLogined = false;
  const [loginPopup, setloginPopup] = useState(false);
  let handleLoginClick = () => {
    setloginPopup(!loginPopup)
  }
  let handleClosePopup = () => {
    setloginPopup(!loginPopup)
  }
  return (
    <nav className="bg-slate-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">

      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-blue-500'>WeHr</span>Company</span>
        </a>
        
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border b  order-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-inherit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-e-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Careers
              </a>
            </li>
            <li>
              <a href="/about" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About Us
              </a>
            </li>
          </ul>
        </div>
        {(!isLogined) && (
          <div className="flex md:order-2">
            <button
              type="button" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        )}
        {(isLogined) && (
          <div className="flex md:order-2">
            
          </div>
        )}
      </div>
      {loginPopup ? (
        <>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold uppercase">Login</h3>
                  <AiOutlineClose className='absolute right-5 top-6 cursor-pointer' onClick={handleClosePopup}/>
                </div>
                {/*body*/}
                <div className="relative p-6 px-16 flex-auto">
                  <div className="my-4" onSubmit={() => setloginPopup(false)}>
                    <Login />
                  </div>
                  <div
                    className="flex justify-center"
                    onClick={handleLoginClick}
                  >
                    <LoginWithGoogle />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </nav>
  );
}

export default Navbar