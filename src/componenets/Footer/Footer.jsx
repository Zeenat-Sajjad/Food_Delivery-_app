import React from 'react'
import {assets }from '../../assets/assets'

const Footer = () => {
  return (
    <div className='flex text-[#d9d9d9] bg-[#323232] flex-col items-center gap-[20px]  pb-[20px] pl-[8vw] pr-[8vw] pt-[80px] mt-[100px]' id='footer'>
        <div className="  w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-[80px]">
            <div className="flex flex-col items-start gap-[20px]">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, delectus modi quasi, magni animi deserunt molestiae iste nihil doloribus sequi quidem tempora ex? Rem optio quia perspiciatis, natus inventore hic!</p>
                <div className=" flex          footer-social-icons">
                    <img className='w-[40px] mr-[15px]' src={assets.facebook_icon} alt="" />
                    <img className='w-[40px] mr-[15px]'   src={assets.twitter_icon} alt="" />
                    <img  className='w-[40px] mr-[15px]'  src={assets.linkedin_icon} alt="" />
                </div>
                </div>
                <div className="flex flex-col items-start gap-[20px]">
                <h2 className='font-bold text-2xl text-white'>COMPANY</h2>
                <ul>
                <li className='mb-[10px] list-none cursor-pointer'>Home</li>
                <li  className='mb-[10px] list-none cursor-pointer' >About us</li>
                <li className='mb-[10px] list-none cursor-pointer'>Delivery</li>
                <li className='mb-[10px] list-none cursor-pointer'>Privacy policy</li>
                </ul>
                </div>
                <div className="flex flex-col items-start gap-[20px]">
                <h2 className='font-bold text-2xl text-white' >GET IN TOUCH</h2>
                <ul>
                    <li className='mb-[10px] list-none cursor-pointer'>03437651630</li>
                    <li className='mb-[10px] list-none cursor-pointer'>zenatsajjad676@gmail.com</li>
                </ul>
                </div>
        
        </div>
        <hr  className='mt-[20px] mb-[20px] mr-[0px] ml-[0px] w-[100%] h-[2px] bg-stone-600 border-none'/>
        <p className="footer-copyright">Copyright 2024 © Tamato.com All reserved</p>
      
    </div>
  )
}

export default Footer
