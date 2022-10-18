import React, { useState, useEffect } from 'react'
import PostAPI from '../../services/PostAPI';
import { HashLoader } from 'react-spinners'
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';

const Career = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const postsGetFromAPI = await PostAPI.getPosts(0)
            setPage(postsGetFromAPI.data)
            setPosts(postsGetFromAPI.data.content)
            setLoading(false)
        })()
    }, []);
    const handlePageChange = async (event, value) => {
        const postsGetFromAPI = await PostAPI.getPosts(value - 1);
        setPage(postsGetFromAPI.data)
        setPosts(postsGetFromAPI.data.content)
    }
    const handleSearchButton = async () => {
        let searchValue = document.getElementById('searchValue').value;
        const postsGetFromAPI = await PostAPI.filterPostByKeyword(searchValue);
        setPage(null)
        setPosts(postsGetFromAPI.data)
    }
    return (
        <>
            <div className="flex justify-center">
                <div className="mt-8 mb-3 xl:w-1/2">
                    <div className="input-group relative flex items-center w-full mb-4">
                        <input type="search" id="searchValue" className="form-control relative flex-auto min-w-0 block w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                        <button onClick={handleSearchButton} className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" >
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Post Lists */}
            {loading ?
                <div className='flex justify-center items-center m-60 mb-96'>
                    <HashLoader
                        color={"#3300ff"}
                        size={100}
                    />
                </div>
                :
                <div className='w-full flex justify-center gap-7 mb-40'>
                    <div className='w-1/6 flex justify-center items-start'>
                        <button type="button" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Filter
                        </button>
                    </div>
                    <div className=''>
                        {posts.map((post) => {
                            return (
                                <div key={post?.postId} className="mb-4 lg:flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <img className="object-cover w-full h-56 rounded-lg lg:w-56" src={post?.thumbnailUrl} alt="" />
                                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                                        <div className='flex justify-between items-center gap-7'>
                                            <p className="text-xl font-semibold text-gray-800 cursor-default">
                                                {post?.title}
                                            </p>
                                        </div>
                                        <div>
                                            <span
                                                className="m-1 text-center py-2 px-2 text-xs sm:text-sm bg-yellow-100 hover:bg-yellow-300 text-orange-400 font-semibold rounded-lg leading-loose cursor-default">
                                                {post?.status ? "Available" : "Unvailable"}
                                            </span>

                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-300">{post?.startTime.split('T')[0]}</span>
                                        <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                                            <Link to={'/post/' + post?.postId}>Apply now</Link>
                                        </button>
                                    </div>
                                </div>)
                        })}
                        <Pagination count={page?.totalPages} size="large" onChange={handlePageChange} />
                    </div>
                </div>
            }
        </>
    )
}

export default Career