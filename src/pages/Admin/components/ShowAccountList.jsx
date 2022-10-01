import React from 'react'
import { MdDone } from 'react-icons/md'
const ShowAccountList = () => {
    return (
        <>
            <div className='flex justify-center items-center gap-56 p-3'>
                <h4>Avatar</h4>
                <h4>Name</h4>
                <h4>Email</h4>
                <h4>Created Date</h4>
                <h4>Status</h4>
            </div>
            <hr />
            <div className='flex justify-center items-center gap-44 bg-slate-300 p-3'>
                <img className='rounded-lg w-14' src="https://gravatar.com/avatar/0f36c548e2d8928511aaf1765ca7fa18?s=400&d=robohash&r=x" alt="" />
                <h4>Quang Huy Nguyen</h4>
                <h4>quanghuyasas@gmail.com</h4>
                <h4>14-05-2022</h4>
                <MdDone />
            </div>
        </>
    )
}

export default ShowAccountList