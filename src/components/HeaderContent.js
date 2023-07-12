import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { useRouter } from 'next/router'

function HeaderContent() {

  const router = useRouter()

  const handleClick = () =>{
    router.push('/xx99-Mark-II-headphone')
  }
  return (
    <div className='bg-[#101010] pt-8 md:pb-6 relative lg:flex lg:justify-between lg:px-24  lg:pb-16 '>
        
          <picture className=' md:flex md:justify-center lg:order-last lg:self-start'>
            <img src="/images/bgImg.png"  alt="man with headset" className=" " />
          </picture>
     
     
        
        <div className='text-white  absolute top-[100px] md:top-[70px] text-center lg:text-left lg:static lg:pt-8 '>
            <p className='text-sm font-normal opacity-50 tracking-[10px] mb-2  md:mb-6 lg:mb-9'>NEW PRODUCT</p>
            <h1 className='font-bold text-[36px] leading-10  md:text-[56px] md:leading-[58px]   lg:text-[50px] tracking-widest lg:w-[396px]  mb-4  md:mb-7'>XX99 Mark II Headphones</h1>
            <p className=' px-[20px] font-medium opacity-75 text-base mb-4  md:mb-6 md:w-[349px] md:mx-auto lg:mb-8 lg:mt-6 lg:p-0   lg:mr-[140px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Button className='bg-deepOrange hover:bg-[#FBAF85] text-base font-bold text-white py-2 px-4' onClick ={handleClick} />
        </div>

    </div>
  )
}

export default HeaderContent