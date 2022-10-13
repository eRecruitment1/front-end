import React, { useState, useEffect } from 'react'
import Navbar from '../../../components/Header/Navbar'
import Footer from '../../../components/Footer/Footer'
import PostAPI from '../../../services/PostAPI'
import { Link, useParams } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
const HRPostDetail = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false)
    useEffect(() => {
        (async () => {
            const postGetFromAPI = await PostAPI.getPostById(id)
            setPost(postGetFromAPI.data)
            setLoading(!loading)
        })()
    }, [id]);
    const handleEditButton = () => {
        setIsUpdate(true)
    }
    const handleUpdateButton = () => {
        const title = document.getElementById('title').value;
        const tag = document.getElementById('tag').value;
        const description = document.getElementById('description').value;

        (async () => {
            await PostAPI.updatePostById(
                {
                    id: post.id,
                    title: title,
                    tag: tag,
                    description: description
                }
            );
        })()
        setIsUpdate(false)
        window.location.reload();
    }
    return (
        <>
            <Navbar />
            {loading ?
                <div className='flex justify-center items-center h-screen'>
                    <HashLoader
                        color={"#3300ff"}
                        size={100}
                    />
                </div>
                :
                <div className="h-screen mt-10 flex font-sans container justify-center">
                    <div className="flex-none w-48 relative">
                    </div>
                    <img className="mt-4 object-cover w-full h-56 rounded-lg lg:w-56" src={post?.thumbnail} alt="" />
                    <form className="flex-auto p-6">
                        <div className="flex-col flex-wrap">
                            {
                                !isUpdate ?
                                    <span className="text-4xl font-semibold text-gray-800 hover:underline dark:text-white">
                                        {post?.title}
                                    </span>
                                    :
                                    <span className="text-4xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                        <input id="title" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" defaultValue={post?.title} />
                                    </span>
                            }
                            {
                                !isUpdate ?
                                    <span
                                        className="m-1 ml-2 text-center py-2 px-2 text-xs sm:text-sm bg-yellow-100 hover:bg-yellow-300 text-orange-400 font-semibold rounded-lg leading-loose cursor-pointer">
                                        {post?.tag}
                                    </span>
                                    :
                                    <select id="tag" className="block appearance-none bg-yellow-100 text-orange-400 m-1 ml-2 text-center py-2 px-2 text-xs sm:text-sm font-semibold rounded-sm leading-loose cursor-pointer focus:outline-none">
                                        <option>{post?.tag}</option>
                                        <option>Fresher</option>
                                        <option>Junior</option>
                                        <option>Senior</option>
                                    </select>
                            }
                            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                Ho Chi Minh City
                            </div>
                        </div>
                        <p className=" mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                            {
                                !isUpdate ?
                                    post?.description
                                    :
                                    <textarea id="description" rows="25" defaultValue={post?.description} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                            }
                        </p>
                        <br />
                        <div className="flex space-x-4 mb-6 text-sm font-medium">
                            <div className="flex-auto flex space-x-4">
                                {
                                    isUpdate ?
                                        <button type="button" onClick={handleUpdateButton} className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Update
                                        </button>
                                        :
                                        <button type="button" onClick={handleEditButton} className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Edit
                                        </button>
                                }

                                <button className="w-[150px] block text-black bg-white-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-black-800" type="button">
                                    <a href='/'>Back to Home</a>
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-slate-700">
                            + 3-month salary bonus ***Apply and Join in 24 Aug - 30 Oct, 2022
                        </p>
                    </form>
                </div>
            }
        </>
    )
}

export default HRPostDetail