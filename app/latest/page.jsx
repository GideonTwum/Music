import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cardmusic from '../components/Cardmusic'

const Latest = () => {
  return (
    <div className='flex flex-col '>
        <Navbar />
            <div className='flex items-center flex-col justify-center mt-20'>
                <div>
                   <h1 className='font-semibold hover:text-[mediumseagreen] cursor-pointer'>Latest Songs</h1>
                </div>
                <Cardmusic />
            </div>

        <Footer />
    </div>
  )
}

export default Latest