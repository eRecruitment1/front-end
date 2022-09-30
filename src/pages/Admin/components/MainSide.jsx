import React from 'react'
import {ImUsers} from 'react-icons/im'
import {RiUserUnfollowLine} from 'react-icons/ri'
import {FaUserCheck} from 'react-icons/fa'
const MainSide = () => {
  return (
    <div className="grid gap-6 mb-8 mt-8 md:grid-cols-2 xl:grid-cols-4">
      <div
        className="w-full rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
      >
        <div className="p-4 flex items-center">
          <div
            className="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4"
          >
          <ImUsers />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Accounts
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              12
            </p>
          </div>
        </div>
      </div>
      <div
        className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
      >
        <div className="p-4 flex items-center">
          <div
            className="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4"
          >
            <RiUserUnfollowLine />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Ban Accounts
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              2
            </p>
          </div>
        </div>
      </div>
      <div
        className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
      >
        <div className="p-4 flex items-center">
          <div
            className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4"
          >
            <FaUserCheck />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Active Accounts
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              10
            </p>
          </div>
        </div>
      </div>
      <div
        className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
      >
        <div className="p-4 flex items-center">
          <div
            className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
              <path
                fill-rule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Pending contacts
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">35</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSide