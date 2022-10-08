import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
const About = () => {
  return (
    <>
      <Navbar />
      <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">KMS Technology Awarded Top 10 ICT Companies in Vietnam 2020</h1>
            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Dec 28, 2020</p>
          </div>
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img src="https://kms-technology.com/wp-content/uploads/2020/12/IMG_9989-scaled.jpg" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"></img>
          </div>
          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <dt className="sr-only">Reviews</dt>
            <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>3.17 <span className="text-slate-400 font-normal">(128)</span></span>
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="flex items-center">
              <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              Ho Chi Minh city, Vietnam
            </dd>
          </dl>
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            14 December 2020 – Ho Chi Minh city, Vietnam – KMS Technology was recognized as one of the Top 10 ICT Companies 2020 by the Vietnam Software Association (VINASA) in the category of Software and IT services outsourcing companies.
          </p>
        </div>
      </div>
      <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">KMS Technology Recognized by the Saigon Times for Outstanding CSR Practices</h1>
            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Nov 30, 2020</p>
          </div>
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img src="https://kms-technology.com/wp-content/uploads/2020/11/IMG_7954-scaled.jpg" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"></img>
          </div>
          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <dt className="sr-only">Reviews</dt>
            <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>4.89 <span className="text-slate-400 font-normal">(109)</span></span>
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="flex items-center">
              <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              Ho Chi Minh city, Vietnam
            </dd>
          </dl>
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            KMS was recently one of 44 businesses awarded the “Saigon Times CSR 2020” for our positive contribution to the community.
          </p>
        </div>
      </div>
      <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">KMS Technology Receives Sao Khue Award 2019 for its Software Outsourcing Services for the Eighth Consecutive Year</h1>
            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">April 21st, 2019</p>
          </div>
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img src="https://kms-technology.com/wp-content/uploads/2019/04/Sao-Khue-Awards-Software-Outsourcing-KMS-Technology-2019.jpg" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"></img>
          </div>
          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <dt className="sr-only">Reviews</dt>
            <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>2.20 <span className="text-slate-400 font-normal">(230)</span></span>
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="flex items-center">
              <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              Ho Chi Minh city, Vietnam
            </dd>
          </dl>
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          Ho Chi Minh City, Vietnam – On April 21, 2019, KMS Technology was awarded the title of Sao Khue 2019 by Vietnam Software Association (VINASA) for its excellent software outsourcing services. KMS is one of the leading providers of software outsourcing and product development for the US market.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About