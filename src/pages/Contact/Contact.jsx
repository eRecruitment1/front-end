import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
const Contact = () => {
    return (
        <>
            <section className="pb-20 relative block bg-blueGray-800">
                <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                    <div className="flex flex-wrap text-center justify-center">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold text-white">Ready to Build Better Software?</h2>
                            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                                Work with a trusted offshore partner to maximize your success while minimizing your development costs.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-12 justify-center">
                        <div className="w-full lg:w-3/12 px-4 text-center">
                            <div className="text-lightBlue-300 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <i className="fas fa-medal text-xl"></i>
                            </div>
                            <h6 className="text-xl mt-5 font-semibold text-white">
                                Expand Your Team Capacity
                            </h6>
                            <p className="mt-2 mb-4 text-blueGray-400">
                                Fill your talent gaps and enhance your team’s skills with senior-level developers.
                            </p>
                        </div>
                        <div className="w-full lg:w-3/12 px-4 text-center">
                            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <i className="fas fa-poll text-xl"></i>
                            </div>
                            <h5 className="text-xl mt-5 font-semibold text-white">
                                Accelerate Speed to Market
                            </h5>
                            <p className="mt-2 mb-4 text-blueGray-400">
                                Achieve continuous delivery cycles to outpace your competitors with faster speed to market.
                            </p>
                        </div>
                        <div className="w-full lg:w-3/12 px-4 text-center">
                            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <i className="fas fa-lightbulb text-xl"></i>
                            </div>
                            <h5 className="text-xl mt-5 font-semibold text-white">Develop Innovative Solutions</h5>
                            <p className="mt-2 mb-4 text-blueGray-400">
                                Bring your software visions to life by leveraging emerging technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative block pt-24 lg:pt-0 bg-blueGray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">Want to work with us?</h4>
                                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                        Complete this form and we will get back to you in 24 hours.
                                    </p>
                                    <div className="relative w-full mb-3 mt-8">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="full-name">Full Name</label><input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Full Name"></input>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="email">Email</label><input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email"></input>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="message">Message</label><textarea rows="4" cols="80" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Type a message..."></textarea>
                                    </div>
                                    <div className="text-center mt-6">
                                        <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="relative flex items-top justify-center min-h-screen bg-blueGray-800 dark:bg-gray-900 sm:items-center sm:pt-0">
                    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <div class="mt-8 overflow-hidden">
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                    <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                        Ready to Build Better Software?
                                    </h1>
                                    <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                        Work with a trusted offshore partner to maximize your success while minimizing your development costs.
                                    </p>

                                    <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold">
                                            123 Cong Hoa Street, Tan Binh District, Ho Chi Minh City
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            028 3811 9977
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            info@acme.org
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}
export default Contact