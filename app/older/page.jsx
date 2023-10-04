import React from 'react'
import Navbar from '../components/Navbar'
import Cardmusic from '../components/Cardmusic'
import Footer from '../components/Footer'

const Older = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <div className='flex flex-col items-center justify-center mt-20'> 
            <div>
                <h1 className='font-semibold hover:text-[mediumseagreen] cursor-pointer'>Older</h1>
            </div>
        <Cardmusic />    
        </div>
        <Footer />
    </div>
  )
}

export default Older