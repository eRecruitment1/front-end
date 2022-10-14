import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PostAPI from '../../../services/PostAPI';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../../services/FirebaseConfig";
const CreatePost = () => {
  const navigate = useNavigate();
  const [fileUpload, setFileUpload] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  
  const uploadAndGetUrl = () => {
    const metadata = {
      contentType: "image/jpg",
    };
    let storageRef = ref(storage, `assets/thumbnail_img/${fileUpload.name}`);
    let uploadTask = uploadBytesResumable(storageRef, fileUpload, metadata);

    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        console.log("Failed to upload img: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setThumbnailUrl(downloadURL);
        });
      }
    );
  };
  

  const handleCreateButton = () => {
    const title = document.getElementById('title').value;
    const status = document.getElementById('status').value == "Available" ? true : false;
    const description = document.getElementById('description').value;
    uploadAndGetUrl();
    (async () => {
      await PostAPI.createPost(
        {
          thumbnailUrl: thumbnailUrl,
          title: title,
          status: status,
          description: description,
        }
      );
    })()
    navigate('/hr/post/view')
  }
  return (
    <>
      <div className='flex-col justify-center items-center p-5 gap-8'>
        <h1 className="text-3xl font-semibold text-gray-800 mb-7 capitalize lg:text-4xl">Create Post</h1>
        <div className="w-1/2 mb-4">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            Thumbnail URL
          </label>
          <input
            type="file"
            name="thumbnail-url"
            id="thumbnail-url"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange={(event) => {
              setFileUpload(event.target.files[0]);
            }}
          />

        </div>
        <div className="w-1/2 mb-4">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="p-2 border mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w-1/6 mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          >
            <option>Available</option>
            <option>Unavailable</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
          <textarea id="description" rows="20" cols="50" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div>
      </div>
      <div className='flex justify-center mb-5'>
        <button type="button" onClick={handleCreateButton} className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Create
        </button>
      </div>
    </>
  )
}

export default CreatePost