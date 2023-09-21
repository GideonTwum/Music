'use client'
import React from 'react'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';


const Firstpage = () => {

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
            artist : 'Ak and Eunice',
            streams : 500 , 
        }
    ]
    let tab = '';
    const setTab = (item) => {
        // return tab = item
        tab = item 
        alert(tab)
    }

  return (
    <div>
        <div className='flex flex-col w-full p-10 '>
            <div>
                <p className='text-sm font-semibold text-[#ccc] '>Filter by:</p>
            </div>

            
            <div className='flex gap-7 m-auto '>
                    <div className='ring-1 ring-[#ccc] hover:bg-[#795185] px-2 cursor-pointer rounded-xl' onClick={()=> setTab('trending')}>
                        <p className='text-sm text-[#ccc]'>Trending</p>
                    </div>
                    <div className='ring-1 ring-[#ccc] hover:bg-[#795185] px-2 cursor-pointer rounded-xl' onClick={()=> setTab('newest')}>
                        <p className='text-sm text-[#ccc]'>Newest</p>
                    </div>
                    <div className='ring-1 ring-[#ccc] hover:bg-[#795185] px-2 cursor-pointer rounded-xl' onClick={()=> setTab('top chart')}>
                        <p className='text-sm text-[#ccc]'>Top chart</p>
                    </div>
                    <div className='ring-1 ring-[#ccc] hover:bg-[#795185] px-2 cursor-pointer rounded-xl' onClick={()=> setTab('older')}>
                        <p className='text-sm text-[#ccc]'>Older</p>
                    </div>

            </div>

            <br />
                    <div className='flex bg-white m-auto justify-between gap-24 items-center rounded '>
                        <input placeholder='Search' className='border-none outline-none p-1 rounded text-sm px-2' type="text" />
                        <SearchIcon />
                    </div>

    {
        music.map((song)=> (
            

            <div className='flex flex-col m-auto bg-[#e1b6f0] hover:shadow-xl p-4 rounded-lg w-[50%] mt-6 '>
            <p className='font-semibold text-white'>#1</p>
                <div className='flex items-center justify-between gap-36'>
                    <div className='flex gap-2 items-center'>
                     <div className='ring-1 ring-[#ccc] p-2 rounded-full bg-[#bb03fc]'>
                        <HeadphonesIcon />
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
        ))
    }
        </div>
    </div>
  )
}

export default Firstpage