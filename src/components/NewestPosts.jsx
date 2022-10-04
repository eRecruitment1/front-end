import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostAPI from '../services/PostAPI';

const NewestPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            const temp = await PostAPI.getPosts()
            setPosts(temp.data)
            console.log(posts)
        })()
    }, []);
    return (
        <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">New Posts</h1>
                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
<<<<<<< HEAD
                    <div className="lg:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://firebasestorage.googleapis.com/v0/b/erecruitment-71104.appspot.com/o/2497976-1.jpg?alt=media&token=b41171f9-69ac-4c22-b829-420852d86979" alt="" />
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
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://firebasestorage.googleapis.com/v0/b/erecruitment-71104.appspot.com/o/2497976-2.jpg?alt=media&token=c9da3797-d2c0-468b-8118-432c5d03ccae" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Senior Engineering Manager
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 22, 2022</span>
                            <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://firebasestorage.googleapis.com/v0/b/erecruitment-71104.appspot.com/o/2497976-3.jpg?alt=media&token=128c4314-387d-4269-95bf-983181eb9b6f" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Engineering Manager
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 22, 2022</span>
                            <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://firebasestorage.googleapis.com/v0/b/erecruitment-71104.appspot.com/o/2497976-4.jpg?alt=media&token=7b1fa3b3-37bb-4479-873d-946300d4dea7" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Senior .NET Software Engineer
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 21, 2022</span>
                            <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://firebasestorage.googleapis.com/v0/b/erecruitment-71104.appspot.com/o/2497976-6.jpg?alt=media&token=97765dce-e3c2-4511-bb3b-9c7c625f1012" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                .NET Software Engineer Intern
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 21, 2022</span>
                            <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                Apply now
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-56" src="https://firebasestorage.googleapis.com/v0/b/erecruitment-71104.appspot.com/o/2497976-5.jpg?alt=media&token=1a94a21f-54c5-48fd-869f-74542d30829a" alt="" />
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                Senior Java Software Engineer
                            </a>
                            <span className="text-sm text-gray-500 dark:text-gray-300">September 20, 2022</span>
                            <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                Apply now
                            </button>
                        </div>
                    </div>
=======
                    {posts.map((post) => {
                        return(
                        <div className="lg:flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-56" src={post?.thumbnail} alt="" />
                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="/" className="text-xl font-semibold text-gray-800 hover:underline ">
                                    {post?.title}
                                </a>
                                <span className="text-sm text-gray-500 dark:text-gray-300">{post?.createdAt}</span>
                                <Link to="/post">
                                    <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                        Apply now
                                    </button>
                                </Link>
                            </div>
                        </div>)
                    })}
>>>>>>> 25906c4b070925f9883558a7aa2431cf21827eec
                </div>
            </div>
        </section>
    )
}

export default NewestPosts