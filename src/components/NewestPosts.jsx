import React from 'react'
import { Link } from 'react-router-dom'

const NewestPosts = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">New Posts</h1>
                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://bom.so/dfwGRY" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Java Software Architect
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 22, 2022</span>
                            <Link to="/post">
                                <button class="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                    Apply now
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://bom.so/dfwGRY" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Senior Engineering Manager
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 22, 2022</span>
                            <button class="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://bom.so/dfwGRY" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Engineering Manager
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 22, 2022</span>
                            <button class="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://bom.so/dfwGRY" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Senior .NET Software Engineer
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 21, 2022</span>
                            <button class="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://bom.so/dfwGRY" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                .NET Software Engineer Intern
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 21, 2022</span>
                            <button class="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://bom.so/dfwGRY" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Senior Java Software Engineer
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 20, 2022</span>
                            <button class="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                Apply now
                            </button>
                        </div>
                        {/* <div>
                            <button type="button" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                More
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewestPosts