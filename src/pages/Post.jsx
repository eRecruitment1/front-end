import React from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer'
const Post = ({post}) => {
    console.log(post)
    return (
        <>
            <Navbar />
            <div className="h-screen flex font-sans container">
                <div className="flex-none w-48 relative">
                </div>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <a href="/" className="text-4xl font-semibold text-gray-800 hover:underline dark:text-white ">
                            Java Software Architect
                        </a>
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            Ho Chi Minh City
                        </div>
                    </div>
                    <p className="text-lg mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit temporibus veniam, minus similique, facilis ab deleniti reprehenderit aspernatur voluptatem dolor mollitia ipsa consectetur possimus fugit sequi ipsum earum tempore quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam voluptate reiciendis dolor consectetur non quia cum, ea aut ab sequi eveniet obcaecati soluta ut autem velit neque quisquam cumque! 
                    </p>
                    <br/>
                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button className="w-[150px] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">
                                <a href="/upload">Upload CV</a>
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

            <Footer />
        </>
    )
}

export default Post