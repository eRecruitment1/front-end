import React, { useState, useEffect } from 'react'
import PostAPI from '../../../services/PostAPI'
import { useParams } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import { BsFillPencilFill } from 'react-icons/bs'
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { storage } from "../../../services/FirebaseConfig";
const HRPostDetail = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false)
    const [fileUpload, setFileUpload] = useState(null);
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    useEffect(() => {
        (async () => {
            const postGetFromAPI = await PostAPI.getPostById(id)
            setPost(postGetFromAPI.data)
            setLoading(false)
        })()
    }, [id]);
    const handleEditButton = () => {
        setIsUpdate(true)
    }
    const handleCancleButton = () => {
        setIsUpdate(false)
    }
    const uploadAndGetUrl = () => {
        if (fileUpload == null) return
        const metadata = {
            contentType: "image/jpg",
        };
        let storageRef = ref(storage, `assets/thumbnail_img/${fileUpload.name}`);
        let uploadTask = uploadBytesResumable(storageRef, fileUpload, metadata);

        uploadTask.on(
            "state_changed",
            () => { },
            (error) => {
                console.log("Failed to upload img: ", error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log(downloadURL)
                    setThumbnailUrl(downloadURL);
                });
            }
        );
    };
    const handleUpdateButton = async () => {
        const title = document.getElementById('title').value;
        const status = document.getElementById('status').value === "Available" ? true : false;
        console.log(status)
        const description = document.getElementById('description').value;
        uploadAndGetUrl();
        await PostAPI.updatePostById(
            {
                postId: post.postId,
                thumbnailUrl: thumbnailUrl !== "" ? thumbnailUrl : "https://firebasestorage.googleapis.com/v0/b/erecruitment-71104.appspot.com/o/assets%2Fthumbnail_img%2Fthumbnail%231.jpg?alt=media&token=cf437632-8322-4aab-a468-ae15bb900e63",
                title: title,
                status: status,
                description: description
            }
        );
        setIsUpdate(false)
        window.location.reload()
    }
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
                <div className="h-screen mt-10 flex font-sans container justify-center mb-72">
                    <div className="flex-none w-48 relative">
                    </div>
                    {
                        !isUpdate ?
                            <img className="mt-4 object-cover w-full h-56 rounded-lg lg:w-56" src={post?.thumbnailUrl} alt="" />
                            :
                            <div className='w-[224px] h-56 relative inline-block cursor-pointer'>
                                <img className="object-cover w-full h-full rounded-lg lg:w-56" src={post?.thumbnailUrl} alt="" />
                                <label className='flex justify-center items-center rounded-lg absolute top-0 right-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                    <BsFillPencilFill className='text-3xl' />
                                    <input
                                        type='file'
                                        className="hidden"
                                        onChange={(event) => {
                                            setFileUpload(event.target.files[0]);
                                        }}
                                    />
                                </label>
                            </div>

                    }
                    <div className='flex-auto p-6'>
                        <div className="flex flex-wrap md:gap-9">
                            {
                                !isUpdate ?
                                    <span className="text-4xl font-semibold text-gray-800 hover:underline dark:text-white">
                                        {post?.title}
                                    </span>
                                    :
                                    <span className="w-full text-4xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                        <input id="title" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" defaultValue={post?.title} />
                                    </span>
                            }
                            {
                                !isUpdate ?
                                    <span
                                        className="m-1 ml-2 text-center py-2 px-2 text-xs sm:text-sm bg-yellow-100 hover:bg-yellow-300 text-orange-400 font-semibold rounded-lg leading-loose cursor-pointer">
                                        {post?.status ? "Available" : "Unvailable"}
                                    </span>
                                    :
                                    <select id="status" className="block appearance-none bg-yellow-100 text-orange-400 m-1 ml-2 text-center py-2 px-6 pl-2 text-xs sm:text-sm font-semibold rounded-sm leading-loose cursor-pointer focus:outline-none">
                                        <option>Available</option>
                                        <option>Unavailable</option>
                                    </select>
                            }
                            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                Ho Chi Minh City
                            </div>
                        </div>
                        <span className=" mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                            {
                                !isUpdate ?
                                    <span className="text-lg mt-4 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                                        {post?.description.replace(/(?:\r\n|\r|\n)/g, '</br>')}
                                    </span>
                                    :
                                    <textarea id="description" rows="25" defaultValue={post?.description} className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                            }
                        </span>
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
                                {
                                    isUpdate ?
                                        <button type="button" onClick={handleCancleButton} className="w-[150px] block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Cancel
                                        </button>
                                        :
                                        <button className="w-[150px] block text-black bg-white-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-black-800" type="button">
                                            <a href='/'>Back to Home</a>
                                        </button>
                                }
                            </div>
                        </div>
                        <span className="text-sm text-slate-700">
                            + 3-month salary bonus ***Apply and Join in 24 Aug - 30 Oct, 2022
                        </span>
                    </div>
                </div>
            }
        </>
    )
}

export default HRPostDetail