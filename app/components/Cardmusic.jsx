'use client'
import React from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { HeadphonesOutlined } from '@mui/icons-material';

const Cardmusic = () => {
    const music = [ 
        {
            id : 1,
            name : 'You are my sunshine',
            artist : 'Brother Jinad',
            streams : 200 , 
        } ,
        {
            id : 2 ,
            name : 'Good Job',
            artist : 'Brother Josh',
            streams : 300 , 
        } ,
        {
            id : 3 ,
            name : 'Darling Jesus',
            artist : 'Deon',
            streams : 400 , 
        } ,
        {
            id : 4 ,
            name : 'Conquerer',
            artist : 'Makaveli',
            streams : 400 , 
        } ,
        {
            id : 5,
            name : 'You dey feel the vibe',
            artist : 'Ak',
            streams : 500 , 
        } ,
        {
            id : 6,
            name : 'The final countdown',
            artist : 'Eunice',
            streams : 500 ,
        }
    ]
  return (
    <div className='flex m-auto'>
        <div>
        <div className='flex gap-7 items-center flex-wrap justify-center'>
        {
        music.map((song)=> (
            <div>        
                        <div className='flex flex-col m-auto bg-white hover:shadow-xl p-4 hover:cursor-pointer w-[100%] rounded-lg  mt-6'>
                                <p className='font-semibold text-black'>#{song.id}</p>
                                    <div className='flex items-center justify-between gap-36'>
                                        <div className='flex gap-2 items-center'>
                                                <div className='ring-1 ring-[#ccc] p-2 rounded-full bg-[mediumseagreen]'>
                                                    <HeadphonesOutlined className='text-white' />
                                                </div>
                                                    <div className='flex flex-col '>
                                                            <p className='font-semibold flex'>  {song.name}</p> 
                                                            <p className='text-sm flex'>  {song.artist}</p> 
                                                            <p className='text-[12px] flex items-center gap-1'>{song.streams} streams</p> 
                                                    </div>
                                        </div>
                                                    <div>
                                                    <PlayArrowIcon /> 
                                                    </div>
                                    </div>
                        </div>
            </div>

        ))
    }
        </div> 
        </div>
    </div>
    
  )
}

export default Cardmusic