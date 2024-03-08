import React from 'react'
import DashboardPage from './Dashboard/DashboardPage'
import HomeLayout from './HomeLayout'

const Home = () => {
  return (
    <div className='flex'>
        <DashboardPage/>
        <HomeLayout/>
    </div>
  )
}

export default Home