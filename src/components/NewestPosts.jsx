import React from 'react'

const NewestPosts = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white">NEW POSTS</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://bom.so/dfwGRY" alt=""/>
                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    Java Software Architect
                                </a>
                                <span className="text-sm text-gray-500 dark:text-gray-300">September 22, 2022</span>
                            </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://bom.so/dfwGRY" alt=""/>
                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    Senior Engineering Manager
                                </a>
                                <span className="text-sm text-gray-500 dark:text-gray-300">September 22, 2022</span>
                            </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://bom.so/dfwGRY" alt=""/>
                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    Engineering Manager
                                </a>
                                <span className="text-sm text-gray-500 dark:text-gray-300">September 22, 2022</span>
                            </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://bom.so/dfwGRY" alt=""/>
                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    Senior .NET Software Engineer
                                </a>
                                <span className="text-sm text-gray-500 dark:text-gray-300">September 21, 2022</span>
                            </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://bom.so/dfwGRY" alt=""/>
                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    .NET Software Engineer Intern
                                </a>
                                <span className="text-sm text-gray-500 dark:text-gray-300">September 21, 2022</span>
                            </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://bom.so/dfwGRY" alt=""/>
                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    Senior Java Software Engineer
                                </a>
                                <span className="text-sm text-gray-500 dark:text-gray-300">September 20, 2022</span>
                            </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default NewestPosts