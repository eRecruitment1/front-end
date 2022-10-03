import React from 'react'
import Navbar from '../../components/Header/Navbar'
import { Link } from 'react-router-dom'
const Career = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <div className="mt-8 mb-3 xl:w-1/2">
                    <div className="input-group relative flex items-center w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                        <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Post Lists */}
            <div className='w-full container flex justify-center gap-7'>
                <div className='w-1/6'>
                    <button type="button" class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Filter
                    </button>
                </div>
                <div className=''>
                    <div className="lg:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://bom.so/dfwGRY" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Java Software Architect
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 22, 2022</span>
                            <Link to="/post">
                                <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                    Apply now
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="lg:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://bom.so/dfwGRY" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Java Software Architect
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 22, 2022</span>
                            <Link to="/post">
                                <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                    Apply now
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Career