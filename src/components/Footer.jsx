import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="ralative bottom-0 bg-black pb-5">
                <div className="max-w-screen-xl px-4 pt-5 mx-auto sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center text-white sm:justify-start">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-blue-500'>WeHr</span>Company</span>
                        </div>

                        <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                            About &nbsp; Careers &nbsp; Contact &nbsp; Privacy & Policy
                            <Link to='/about' className="button">
                                About
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer