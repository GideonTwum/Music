'use client'
import React, { useEffect, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { HeadphonesOutlined } from '@mui/icons-material';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Cardmusic = () => {
    const [songs, setSongs] = useState([])
    const [likes, setLikes] = useState(false)
    const [click, setClick] = useState(false)

    const getSongs = async() => {
        try{
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              fetch("https://music-api-qkmn.onrender.com/api/v1/music/all", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setSongs(result.songs)
                    console.log(result.songs)
                })
                .catch(error => console.log('error', error));
        }catch(err){
          console.log(err)  
        }
    }

    useEffect(() => {
        getSongs()
    } , [])

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
        songs.map((song)=> (
            <div>        
                        <div className='flex flex-col m-auto bg-white hover:shadow-xl p-4 hover:cursor-pointer w-[100%] rounded-lg  mt-6'>
                                {/* <p className='font-semibold text-black'>#{song.id}</p> */}
                                    <div className='flex items-center justify-between gap-36'>
                                        <div className='flex gap-2 items-center'>
                                                <div className='ring-1 ring-[#ccc]  rounded-full'>
                                                    <Image className='rounded-full'
                                                    width={200}
                                                    height={200}
                                                    src={`https://music-api-qkmn.onrender.com/uploads/${song.photo}`}
                                                    alt=''

                                                    />
                                                </div>
                                                    <div className='flex flex-col '>
                                                            <p className='font-semibold flex'>  {song.song_name}</p> 
                                                            <p className='text-sm flex'>  {song.artiste_name}</p>
                                                            <audio controls>
                                                            <source src={`https://music-api-qkmn.onrender.com/uploads/${song.song}`} type="audio/mpeg" />
                                                            Your browser does not support the audio element.
                                                            </audio> 
                                                            <p className='text-[12px] flex items-center gap-1'>{song.streams} streams</p> 
                                                            <p className='text-[12px] flex items-center gap-1'> {likes} likes   <FavoriteBorderIcon className='text-red-400' onClick={() => setLikes(likes + 1)} /> </p>
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