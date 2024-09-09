import React from 'react'

const Header = () => {
  return (
    <div className="bg-[url('/header_img.png')] bg-no-repeat h-[34vw] my-[30px] mx-auto relative bg-contain ">
      <div className='flex flex-col absolute items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn'>
      <h2 className='text-6xl font-medium  text-[calc(max(4.5vw, 22px))] text-white'>Order your favorite food here</h2>
      <p className='text-white font-small'>Choose from diverse menu featuring a delectable array of dishes crafted with the finest ingredients and expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <button className='text-[calc(max(1vw, 13px))] bg-white rounded-[50px] border-none text-[#747474] font-medium p-[1vw_2.3vw]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header