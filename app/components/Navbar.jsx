'use client'

import React from 'react'
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useState } from 'react';
import { DarkModeOutlined } from '@mui/icons-material';

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(true)
  
  sessionStorage.setItem("light_theme", isLightMode)
  
  return (
    <div className={isLightMode ? 'bg-[#F9FAFD]' : 'bg-[#3A3A3A]'}>
        <div className='flex justify-between shadow-xl bg-white p-5 w-full'> 
        <div className='flex items-center text-sm gap-1'>
        <h2 className='font-semibold text-sm text-[mediumseagreen]'>Experimento</h2> <p className='font-thin '> Music</p>
        </div>
           
            <div className='flex items-center gap-3'>
                <p className='text-[#636169] text-sm hover:ring-1 rounded hover:ring-[#ccc]'> Hello, Joshua</p>
                <div className='hover:cursor-pointer'>
                  {
                    isLightMode ? <div onClick={() => setIsLightMode(false)}><LightModeOutlinedIcon /></div> : <div onClick={() => setIsLightMode(true)}><DarkModeOutlined /></div>
                  }
                </div>
            </div>
          
        </div>
    </div>

  )
}

export default Navbar