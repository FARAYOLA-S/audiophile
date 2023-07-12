import React from 'react'
import Button from './Button'
import { useRouter } from 'next/router'

function Earphone1() {
  const router = useRouter()
  return (
    <div className=" md:flex md:gap-4 lg:gap-6 mb-10">
    <div className='md:w-3/5'>
    <img src='/images/earpod.png' alt='Earpod'/>
    </div>  
    <div className=" bg-deepGray mt-5 md:mt-0 rounded-lg py-10 md:py-8  pl-5 md:pl-7 md:flex md:flex-col md:justify-center md:w-3/5">
        <p className=" font-bold text-[28px] mb-[26px]">YX1 EARPHONES</p>
        <Button className = 'hover:bg-black hover:text-white border-lightBlack border py-2 px-4 font-bold text-base ' onClick={()=> router.push('/yx1-earphone')}/>
    </div>
</div>

  )
}

export default Earphone1