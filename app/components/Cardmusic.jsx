'use client'
import React, { useEffect, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { HeadphonesOutlined } from '@mui/icons-material';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {toast, Toaster} from 'react-hot-toast';
import { Popconfirm } from 'antd';


const Cardmusic = () => {
    const [songs, setSongs] = useState([])
    const [likes, setLikes] = useState(false)
    const [click, setClick] = useState(true)

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

    const delMusic = (musicId) => {
        try{
            var requestOptions = {
                method: 'DELETE',
                redirect: 'follow'
              };
              
              fetch(`https://music-api-qkmn.onrender.com:/api/v1/music/delete/${musicId}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    toast.success(result.msg)
                    getSongs()
                    console.log(result)
                })
                .catch(error => console.log('error', error));
                  }
        catch(error){
            console.log(error)
        }
    }


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
    <div className='flex m-auto justify-center'>
        <div>
        <div className='flex gap-7 items-center flex-wrap justify-center'>
        {
        songs.map((song)=> (
            <div>        
                        <div className='flex flex-col m-auto bg-white hover:shadow-xl p-3 justify-center hover:cursor-pointer w-[100%] rounded-xl  mt-6'>
                                {/* <p className='font-semibold text-black'>#{song.id}</p> */}
                                    <div className='flex items-center justify-between gap-36'>
                                        <div className='flex gap-2 items-center'>
                                                <div className='ring-1 ring-[#ccc]  rounded-full'>
                                                    <Image className='rounded-xl'
                                                    width={70}
                                                    height={70}
                                                    src={`https://music-api-qkmn.onrender.com/uploads/${song.photo}`}
                                                    alt=''

                                                    />
                                                </div>
                                                    <div className='flex flex-col '>
                                                            <p className='font-semibold text-[13px] flex'>  {song.song_name}</p> 
                                                            <p className='text-[12px] flex'>  {song.artiste_name}</p>
                                                            <audio className='h-[30px] w-[50]' controls>
                                                            <source src={`https://music-api-qkmn.onrender.com/uploads/${song.song}`} type="audio/mpeg" />
                                                            Your browser does not support the audio element.
                                                            </audio> 
                                                            <p className='text-[10px] flex items-center gap-1'>{song.streams} streams</p> 
                                                            <div className='flex'>
                                                            <p className='text-[10px] flex items-center gap-1'> {likes} likes </p>
                                                            <div className='flex gap-56'>
                                                                {
                                                                    click ?   <div onClick={() => setClick(false)}>
                                                                    <FavoriteBorderIcon className='text-red-400' onClick={() => setLikes(likes + 1)} /> 
                                                                              </div> 
                                                                               : 
                                                                        <div onClick={() => setClick(true)}> 
                                                                            <FavoriteIcon className='text-red-400 favoriteicon' />
                                                                        </div>
                                                                }
                                                                   <Popconfirm title='Are you sure you want to delete this song?' okButtonProps={{style:{backgroundColor:'tomato'}}} okText='Delete' onConfirm={() => delMusic(song._id)}>
                                                                      <DeleteOutlineOutlinedIcon className='text-[20px]' />
                                                                   </Popconfirm>
                                                            </div>
                                                            </div>
                                                            
                                                            
                                                    </div>
                                        </div>
                                    </div>
                        </div>
            </div>

        ))
    }
        </div> 
        </div>
        <Toaster />
    </div>
    
  )
}

export default Cardmusic