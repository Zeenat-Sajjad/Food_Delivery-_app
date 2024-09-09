import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-[100px] text-[max(3vw,20px)] text-center font-medium'>
        <p>For Better Experienec Download<br/>Tamato App</p>
        <div className='flex mt-[40px] gap-[max(2vw,10px)] justify-center'>
<img className='w-[max(30vw,120px)] max-w-[180px] transition duration-500 cursor-pointer transform hover:scale-105' src={assets.play_store} alt="" />
<img className='w-[max(30vw,120px)] max-w-[180px] transition duration-500 cursor-pointer transform hover:scale-105'  src={assets.play_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
