import React, { useState } from 'react'
import SideNav from './components/SideNav'
import ShowStatistc from './components/ShowStatistc'
import ShowAccountList from './components/ShowAccountList'

const DashBoard = () => {
  return (
    <>
      <div className='flex justify-start'>
        <SideNav />
        <div className='w-full'>
          <ShowStatistc />
          <ShowAccountList />
        </div>
      </div >
    </>
  )
}
export default DashBoard