import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cardmusic from '../components/Cardmusic'

const TopChart = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <div className='flex flex-col items-center justify-center mt-20'>
            <div>
                <h1 className='font-semibold hover:text-[mediumseagreen] cursor-pointer'> Top Chart </h1>
            </div>
            <Cardmusic />
        </div>
        <Footer />
    </div>
  )
}

export default TopChart