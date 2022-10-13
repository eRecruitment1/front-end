import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/Header/Navbar'
import PostAPI from '../../../services/PostAPI';

const CreatePost = () => {
  const navigate = useNavigate();
  const handleCreateButton = () => {
    const thumbnail_url = document.getElementById('thumbnail-url').value;
    const title = document.getElementById('title').value;
    const tag = document.getElementById('tag').value;
    const status = document.getElementById('status').value;
    const description = document.getElementById('description').value;

    (async () => {
      await PostAPI.createPost(
        {
          thumbnail: thumbnail_url,
          title: title,
          tag: tag,
          status: status,
          description: description,
          createAt: new Date(),
        }
      );
    })()
    navigate('/hr/post/view')
  }
  return (
    <>
      <Navbar />
      <div className='flex-col justify-center items-center p-5 gap-8'>
        <h1 className="text-3xl font-semibold text-gray-800 mb-7 capitalize lg:text-4xl">Create Post</h1>
        <div className="w-1/2 mb-4">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            Thumbnail URL
          </label>
          <input
            type="text"
            name="thumbnail-url"
            id="thumbnail-url"
            defaultValue="https://firebasestorage.googleapis.com/v0/b/erecruitment-71104.appspot.com/o/assets%2Fthumbnail_img%2Fthumbnail%236.jpg?alt=media&token=dabd50ea-4d6b-4dc1-ba13-5c1c27f79094"
            className="p-2 border mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
            Tag
          </label>
          <select
            id="tag"
            name="tag"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          >
            <option>Fresher</option>
            <option>Junior</option>
            <option>Senior</option>
          </select>
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
            <option>DISPLAYING</option>
            <option>UNAVAILABLE</option>
            <option>UPCOMING</option>
          </select>
        </div>
        <div className="w-full">
          <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
          <textarea id="description" rows="20" cols="50" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
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