import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cardmusic from '../components/Cardmusic'

const Trending = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <div className='flex flex-col flex-wrap items-center justify-center mt-20'>
                <div>
                    <h1 className='font-semibold hover:text-[mediumseagreen] cursor-pointer'>Trending Songs</h1>
                </div>
                <Cardmusic />
        </div>
        <Footer />
    </div>
  )
}

export default Trending