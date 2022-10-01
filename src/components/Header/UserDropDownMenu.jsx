import React from "react";
import PropTypes from "prop-types";
import { logout } from "../../redux/slice/UserSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { UserAuth } from "../../context/AuthContext"

UserDropDownMenu.propTypes = {
    userInfo: PropTypes.object.isRequired,
};

UserDropDownMenu.defaultProps = {
    userInfo: {},
};

function UserDropDownMenu(props) {
    const { logOut } = UserAuth();
    const loggedInUser = props.userInfo;
    const userRole = loggedInUser.role;
    const dispatch = useDispatch();
    const handleLogOutClick = () => {
        const action = logout();
        dispatch(action);
        logOut();
        window.location.reload();

    };

    return (
        <motion.div
            animate={{ x: 160, y: 50, opacity: 1 }}
            initial={{ x: -10, opacity: 0 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.12 }}
        >
            <div className="absolute inline-block text-left z-50">
                <div
                    className="origin-top-right absolute right-5 w-56 rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >

                    <div className="py-1" role="none">
                        <div
                            className="text-red-400 block px-4 py-2 text-sm hover:bg-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-6"
                            onClick={handleLogOutClick}
                        >
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default UserDropDownMenu;