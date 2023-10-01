'use client'
import React from 'react'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';


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
            <div className='flex items-center gap-1 m-auto ml-96 m-2 filter'>
                <FilterNoneOutlinedIcon className='text-[#ccc] text-[12px] filtericon' />
                <p className='text-[12px] font-semibold text-[#ccc] '>Filter by:</p>
            </div>

            
            <div className='flex gap-7 m-auto '>
                    <div className='px-2 cursor-pointer rounded-xl' onClick={()=> setTab('trending')}>
                        <p className='text-[13px] text-[#3A3A3A] hover:text-[mediumseagreen]'> Trending </p>
                    </div>
                    <div className=' px-2 cursor-pointer rounded-xl' onClick={()=> setTab('newest')}>
                        <p className='text-[13px] text-[#3A3A3A] hover:text-[mediumseagreen]'>Newest</p>
                    </div>
                    <div className='px-2 cursor-pointer rounded-xl' onClick={()=> setTab('top chart')}>
                        <p className='text-[13px] text-[#3A3A3A] hover:text-[mediumseagreen]'>Top chart</p>
                    </div>
                    <div className=' px-2 cursor-pointer rounded-xl' onClick={()=> setTab('older')}>
                        <p className='text-[13px] text-[#3A3A3A] hover:text-[mediumseagreen]'>Older</p>
                    </div>

            </div>

            <br />
                    <div className='flex bg-white m-auto justify-between gap-24 items-center rounded p-2 '>
                        <input placeholder='Search' className='border-none outline-none p-1 rounded text-sm px-2  ' type="text" />
                        <SearchIcon className='text-sm text-[#ccc]' />
                    </div>
    <div className='flex items-center gap-10 justify-around'>
        <div>
        {
        music.map((song)=> (
            <div className='flex flex-col m-auto bg-white hover:shadow-xl p-4 hover:cursor-pointer w-full rounded-lg w-[50%] mt-6'>
                    <p className='font-semibold text-black'>#{song.id}</p>
                        <div className='flex items-center justify-between gap-36'>
                            <div className='flex gap-2 items-center'>
                                    <div className='ring-1 ring-[#ccc] p-2 rounded-full bg-[mediumseagreen]'>
                                        <HeadphonesIcon className='text-white' />
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
    <div>
    {
        music.map((song)=> (
            <div className='flex flex-col m-auto bg-white hover:shadow-xl w-full hover:cursor-pointer p-4 rounded-lg w-[50%] mt-6'>
                    <p className='font-semibold text-black'>#{song.id}</p>
                        <div className='flex items-center justify-between gap-36'>
                            <div className='flex gap-2 items-center'>
                                    <div className='ring-1 ring-[#ccc] p-2 rounded-full bg-[mediumseagreen]'>
                                        <HeadphonesIcon className='text-white' />
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
    <div>
    {
        music.map((song)=> (
            <div className='flex flex-col m-auto bg-white hover:shadow-xl w-full hover:cursor-pointer p-4 rounded-lg w-[50%] mt-6'>
                    <p className='font-semibold text-black'>#{song.id}</p>
                        <div className='flex items-center justify-between gap-36'>
                            <div className='flex gap-2 items-center'>
                                    <div className='ring-1 ring-[#ccc] p-2 rounded-full bg-[mediumseagreen]'>
                                        <HeadphonesIcon className='text-white' />
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
   
        </div>
    </div>
  )
}

export default Firstpage