import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-black pb-5">
                <div className="max-w-screen-xl px-4 pt-5 mx-auto sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center text-white sm:justify-start">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-purple-500'>WeHr</span>Company</span>
                        </div>

                        <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                            T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer