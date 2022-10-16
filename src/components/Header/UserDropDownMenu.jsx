import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useDispatch } from "react-redux";
import { logout } from '../../redux/slice/UserSlice'
import { UserAuth } from '../../context/AuthContext'
import LocalStorageKey from '../../constant/LocalStorageKey';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function UserDropDownMenu() {
    const { logOut } = UserAuth()
    const dispatch = useDispatch();
    const handleLogOutClick = () => {
        const action = logout();
        dispatch(action);
        logOut();
        window.location.reload();
    };
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button>
                    <img className='w-[30px]' src={JSON.parse(localStorage.getItem(LocalStorageKey.USER))?.urlImg} alt="" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/user/profile"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                        {
                            (JSON.parse(localStorage.getItem(LocalStorageKey.USER)).roleName == "HREMPLOYEE") ?
                            <Menu.Item>
                                {({ active }) => (

                                    (<a
                                        href="/hr/post/view"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        View Post
                                    </a>)
                                )}
                            </Menu.Item>
                            :null
                        }
                        {
                            (JSON.parse(localStorage.getItem(LocalStorageKey.USER)).roleName == "HREMPLOYEE") ?
                            <Menu.Item>
                                {({ active }) => (
                                    (<a
                                        href="/hr/post/create"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Create Post
                                    </a>)
                                )}
                            </Menu.Item>
                            : null
                        }

                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                    onClick={handleLogOutClick}
                                >
                                    Sign out
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
