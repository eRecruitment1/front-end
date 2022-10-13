import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import PostAPI from '../../services/PostAPI'
import { useParams } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
const PostDetail = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const postGetFromAPI = await PostAPI.getPostById(id)
            setPost(postGetFromAPI.data)
            setLoading(false)
        })()
    }, [id]);
    return (
        <>
            <Navbar />
            {loading ?
                <div className='flex justify-center items-center h-screen'>
                    <HashLoader
                        color={"#3300ff"}
                        size={100}
                    />
                </div>
                :
                <div className="h-screen mt-10 flex font-sans container justify-center">
                    <div className="flex-none w-48 relative">
                    </div>
                    <img className="mt-4 object-cover w-full h-56 rounded-lg lg:w-56" src={post?.thumbnail} alt="" />
                    <form className="flex-auto p-6">
                        <div className="flex flex-wrap">
                            <a href="/" className="text-4xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                {post?.title}
                            </a>
                            <span
                                className="m-1 ml-2 text-center py-2 px-2 text-xs sm:text-sm bg-yellow-100 hover:bg-yellow-300 text-orange-400 font-semibold rounded-lg leading-loose cursor-pointe">
                                {post?.tag}
                            </span>
                            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                Ho Chi Minh City
                            </div>
                        </div>
                        <p className="text-lg mt-4 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                            {post?.description}
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam praesentium laudantium vitae tempora, consectetur nulla? Dignissimos harum recusandae, ea alias quo aspernatur error omnis atque est, exercitationem eveniet et aliquam nulla quasi. Ipsum quidem est molestias, omnis quisquam ipsam facere vitae saepe quod voluptas sunt itaque libero veritatis illum perspiciatis sit odio laborum laudantium accusamus! Praesentium explicabo animi iusto minima vitae! Quo consectetur vel unde, nisi molestiae esse expedita dolores numquam tempora soluta pariatur deleniti laborum commodi eius eaque! Dignissimos ab animi accusantium natus quis est consectetur iste placeat. Eaque veniam reprehenderit soluta vel quibusdam, temporibus nulla nam officia repudiandae eligendi suscipit ipsam voluptates reiciendis sit ut culpa modi debitis quo provident id impedit cum natus consectetur. Atque odit quas nihil dolor maiores obcaecati nemo alias molestias necessitatibus laboriosam ullam culpa rerum repellendus tempora ipsum quasi voluptate, voluptates ipsa optio quisquam? Inventore esse vero facere commodi pariatur, dolorum vitae placeat consequuntur nulla libero dicta ratione consequatur? Natus possimus soluta quis sequi atque? Repellendus omnis laborum nobis distinctio cumque soluta placeat animi quisquam? Minus aliquid exercitationem, ducimus facilis asperiores nulla ipsam fugiat aut unde. Dolorem placeat molestias architecto sit, maiores perspiciatis deleniti et quod corrupti cum! Expedita a voluptatibus dolor?
                            <br />
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit temporibus veniam, minus similique, facilis ab deleniti reprehenderit aspernatur voluptatem dolor mollitia ipsa consectetur possimus fugit sequi ipsum earum tempore quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam voluptate reiciendis dolor consectetur non quia cum, ea aut ab sequi eveniet obcaecati soluta ut autem velit neque quisquam cumque!
                        </p>
                        <br />
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
            }


            <Footer />
        </>
    )
}

export default PostDetail