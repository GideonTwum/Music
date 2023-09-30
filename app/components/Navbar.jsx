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
        <div className='flex justify-between bg-white p-2 w-full'> 
            <h2 className='font-semibold'>Experimento Music</h2>
            <p className='text-[#636169] text-sm hover:ring-1 rounded hover:ring-[#ccc]'> Hello, Joshua</p>
            <div>
              {
                isLightMode ? <div onClick={() => setIsLightMode(false)}><LightModeOutlinedIcon /></div> : <div onClick={() => setIsLightMode(true)}><DarkModeOutlined /></div>
              }
            </div>
        </div>
    </div>

  )
}

export default Navbar