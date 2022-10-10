import { useEffect, useState } from 'react'
import CandidateProfileAPI from '../../services/CandidateProfileAPI'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import Navbar from '../../components/Header/Navbar';
import { motion } from "framer-motion";
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs'
import { HashLoader } from 'react-spinners'
import LocalStorageKey from '../../constant/LocalStorageKey';
const Profile = () => {
    const [account, setAccount] = useState({});
    const [updateModal, setUpdateModal] = useState(false)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const accountGetFromAPI = await CandidateProfileAPI.getProfile();
                setAccount(accountGetFromAPI.data)
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [account.id]);
    let handleShowModal = () => {
        setUpdateModal(!updateModal)
    }
    let handleCloseModal = () => {
        setUpdateModal(false)
    }
    let handleOnSubmit = () => {
        let firstname = document.getElementById('first-name').value;
        let lastname = document.getElementById('last-name').value;
        let phone = document.getElementById('phone-number').value;
        let gender = (document.getElementById('gender').value === 'Male') ? true : false
        let avatarUrl = document.getElementById('avatar-url').value;
        console.log(avatarUrl);
        (async () => {
            await CandidateProfileAPI.updateProfile(
                {
                    id: account.id,
                    urlImg: avatarUrl,
                    firstName: firstname,
                    lastName: lastname,
                    phone: phone,
                    gender: gender
                }
            );
        })()
        const localAccount = {
            ...JSON.parse(localStorage.getItem(LocalStorageKey.USER)),
            urlImg: avatarUrl,
            firstName: firstname,
            lastName: lastname,
            phone: phone,
            gender: gender
        }
        localStorage.setItem(LocalStorageKey.USER, JSON.stringify(localAccount))
        setUpdateModal(false)
        window.location.reload();
    }
    return (
        <>
            <Navbar />
            {loading ?
                <div className='flex justify-center items-center w-screen h-screen'>
                    <HashLoader
                        color={"#3300ff"}
                        size={100}
                    />
                </div>
                : (
                    <>
                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6 flex items-end gap-4">
                                <img className='w-[150px] rounded-lg' src={account?.urlImg} alt="" />
                                <h3 className="inline-block text-lg font-medium leading-6 text-gray-900">{account?.username}</h3>
                                <BsFillPencilFill className='cursor-pointer' onClick={handleShowModal} />
                            </div>
                            <div className=" flex justify-center">
                                <dl className='w-screen'>

                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Full Name for</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{account?.firstName + " " + account?.lastName}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Application for</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{account?.email}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{account?.phone}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Gender</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            {account?.gender ? "Male" : "Female"}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                    <div className="flex w-0 flex-1 items-center">
                                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                        <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                                                    </div>
                                                    <div className="ml-4 flex-shrink-0">
                                                        <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            Download
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </>)
            }

            {/* Update Modal */}
            {updateModal ? (
                <>
                    <motion.div
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 20, opacity: 0 }}
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-md bg-white rounded-lg">
                            {/*content*/}
                            <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-2xl font-semibold uppercase">Update</h3>
                                    <AiOutlineClose className='absolute right-5 top-6 cursor-pointer' onClick={handleCloseModal} />
                                </div>
                                {/*body*/}
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className=" px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6 w-[400px]">
                                            <div className="col-span-6">
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
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="phone-number"
                                                    id="phone-number"
                                                    autoComplete="phone-number"
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

                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            onClick={handleOnSubmit}
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )

}

export default Profile