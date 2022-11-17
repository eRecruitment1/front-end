import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className=" bg-black pb-5 mt-10">
                <div className="max-w-screen-xl px-4 pt-5 mx-auto sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center text-white sm:justify-start">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span style={{color: "#3300ff"}}>WeHr</span>Company</span>
                        </div>

                        <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                            <Link to='/about' className="button">
                                About
                            </Link>
                            <Link to='/career' className="button">
                                &nbsp;Career
                            </Link>
                            <Link to='/contact' className="button">
                                &nbsp;Contact
                            </Link>
                            <Link to='/' className="button">
                                &nbsp;Privacy & Policy
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer