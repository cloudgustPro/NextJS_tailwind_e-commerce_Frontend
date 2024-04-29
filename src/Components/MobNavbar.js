import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineHome, AiOutlineAppstore} from 'react-icons/ai'
import {IoMenuOutline} from 'react-icons/io5'
const MobNavbar = () => {
  return (
    <div className='lg:hidden fixed left-[50%] w-full bottom-0 max-w-[500px] px-8 -translate-x-[50%]'>
      <div className='flex justify-between text-[28px] py-2'>
        <IoMenuOutline />

        <div className='relative'>
            <HiOutlineShoppingBag />
            <div className='absolute bg-red-500 rounded-full text-white w-[18px] h-[18px] text-[12px] grid place-items-center top-0 right-0 translate-x-1 -translate-y-1'>0</div>
        </div>
      
      <AiOutlineHome />
      <div className='relative'>
        <FiHeart/>
        <div className='absolute bg-red-500 rounded-full text-white w-[18px] h-[18px] text-[12px] grid place-items-center top-0 right-0 translate-x-1 -translate-y-1'>0</div>
      </div>
      <AiOutlineAppstore />
    </div>
  </div>
  )
}

export default MobNavbar
