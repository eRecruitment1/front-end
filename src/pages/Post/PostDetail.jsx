import React, { useState, useEffect } from 'react'
import PostAPI from '../../services/PostAPI'
import { Link, useParams } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import { Modal } from 'antd'
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { storage } from "../../services/FirebaseConfig";
import CvAPI from '../../services/CvAPI';
import { notification } from 'antd';

const PostDetail = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [uploadModal, setUploadModal] = useState(false)
    const [fileUrl, setFileUrl] = useState("");

    const uploadFileAndGetUrl = (fileUpload) => {
        const fileRef = ref(storage, `assets/cv/${fileUpload.name}`);
        const uploadTask = uploadBytesResumable(fileRef, fileUpload);
        uploadTask.on('state_changed',
            () => {
            },
            () => {
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFileUrl(downloadURL)
                });
            }
        );
    };
    const handleCVUpload = async () => {
        try{
            if(fileUrl){
                await CvAPI.createCV(
                    {
                        linkCV: fileUrl != "" ? fileUrl : "https://firebasestorage.googleapis.com/v0/b/erecruitment-71104.appspot.com/o/assets%2Fcv%2Fquanghuynguyen_cv.pdf?alt=media&token=e843fde2-c420-41ca-bdd4-7d50f54d9d82",
                        postID: id,
                    }
                )
                notification.success({
                    message: 'Upload Sucessfully',
                });
                setUploadModal(false)
            }
        }catch (e){
            console.log(e)
            notification.error({
                message: 'Upload Failed',
                description: "You have uploaded 1 CV!!"
            });
        }
    }

    useEffect(() => {
        (async () => {
            const postGetFromAPI = await PostAPI.getPostById(id)
            setPost(postGetFromAPI.data)
            setLoading(false)
        })()
    }, [id]);
    return (
        <>
            {
                loading ?
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
                                <br />
                                <strong>
                                    {post?.description.split("\n")[0]}
                                </strong>
                                <br />
                                <br />
                                {post?.description.split("\n").map(e => {
                                    return (
                                        <>
                                            {e}
                                            <br />
                                        </>
                                    )
                                })}

                            </p>
                            <br />
                            <div className="flex space-x-4 mb-6 text-sm font-medium">
                                <div className="flex-auto flex space-x-4">
                                    <button onClick={() => setUploadModal(true)} className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                        Upload CV
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
            <Modal
                title="Upload CV"
                open={uploadModal}
                onCancel={(() => setUploadModal(false))}
                width={1000}
                footer={
                    <button
                        type="button" className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleCVUpload}
                    >
                        Upload
                    </button>
                }
            >
                <div className="flex justify-center items-center h-full w-full">
                    <div className="m-4 w-full">
                        <label className="inline-block mb-2 text-gray-500">CV Upload</label>
                        <div className="flex-col items-center justify-center w-full">
                            <input
                                type="file"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                onChange={(event) => {
                                    uploadFileAndGetUrl(event.target.files[0]);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default PostDetail