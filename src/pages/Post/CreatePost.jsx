import React from 'react'

const CreatePost = () => {
  return (
    <>
      <div className= 'flex-col justify-center items-center p-5 gap-6'>
            <div className="w-1/3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Avatar URL
              </label>
              <input
                type="text"
                name="avatar-url"
                id="avatar-url"
                defaultValue="https://robohash.org/182395facb45ee3c83dd6350e9a629fb?set=set4&bgset=&size=400x400"
                className="p-2 border mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="p-2 border mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            
      </div>
      <div className="overflow-hidden w-screen sm:rounded-md">
        <div className=" px-4 py-5 sm:p-6">
          <div className="flex justify-center w-[400px]">
            <div className="w-full">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Avatar URL
              </label>
              <input
                type="text"
                name="avatar-url"
                id="avatar-url"
                defaultValue="https://robohash.org/182395facb45ee3c83dd6350e9a629fb?set=set4&bgset=&size=400x400"
                className="p-2 border mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="p-2 border mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="p-2 border mt-1 block w-full h-9 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>


            <div className="col-span-6">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                autoComplete="gender-name"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="col-span-6">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePost