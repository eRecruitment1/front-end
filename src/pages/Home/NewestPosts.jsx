import React, { useState, useEffect } from 'react'
import PostAPI from '../../services/PostAPI';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners'
const NewestPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const postsGetFromAPI = await PostAPI.getPosts()
            setPosts(postsGetFromAPI.data)
            setLoading(!loading)
        })()
    }, []);
    return (
        <>
            {
                loading ? 
                    <div className='flex justify-center items-center mb-60'>
                        <HashLoader
                            color={"#3300ff"}
                            size={100}
                        />
                    </div>
                    :
                    <section className="bg-white">
                        <div className="container px-6 py-10 mx-auto">
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">New Posts</h1>
                            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                                {posts.map((post) => {
                                    return (
                                        <div key={post.id} className="lg:flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                            <img className="object-cover w-full h-56 rounded-lg lg:w-56" src={post?.thumbnail} alt="" />
                                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                                <p className="text-xl font-semibold text-gray-800 cursor-default">
                                                    {post?.title}
                                                </p>
                                                <div>
                                                    <span
                                                        className="m-1 text-center py-2 px-2 text-xs sm:text-sm bg-yellow-100 hover:bg-yellow-300 text-orange-400 font-semibold rounded-lg leading-loose cursor-default">
                                                        {post?.tag}
                                                    </span>

                                                </div>
                                                <span className="text-sm text-gray-500 dark:text-gray-300">{post?.createdAt}</span>
                                                <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                                    <Link to={'/post/' + post?.id}>Apply now</Link>
                                                </button>
                                            </div>
                                        </div>)
                                })}
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}

export default NewestPosts