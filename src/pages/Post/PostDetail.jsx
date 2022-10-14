import React, { useState, useEffect } from 'react'
import PostAPI from '../../services/PostAPI'
import { useParams } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
const PostDetail = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const postGetFromAPI = await PostAPI.getPostById(id)
            setPost(postGetFromAPI.data)
            setLoading(false)
        })()
    }, [id]);
    return (
        <>
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
                    <img className="mt-4 object-cover w-full h-56 rounded-lg lg:w-56" src={post?.thumbnailUrl} alt="" />
                    <form className="flex-auto p-6">
                        <div className="flex flex-wrap">
                            <span className="text-4xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                {post?.title}
                            </span>
                            <span
                                className="m-1 ml-2 text-center py-2 px-2 text-xs sm:text-sm bg-yellow-100 hover:bg-yellow-300 text-orange-400 font-semibold rounded-lg leading-loose cursor-pointe">
                                {post?.status ? "Available" : "Unvailable"}
                            </span>
                            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                Ho Chi Minh City
                            </div>
                        </div>
                        <p className="text-lg mt-4 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                            {post?.description.replace(/(?:\r\n|\r|\n)/g, '<br>')}
                        </p>
                        <br />
                        <div className="flex space-x-4 mb-6 text-sm font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                    <a href="/upload">Upload CV</a>
                                </button>
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

export default PostDetail