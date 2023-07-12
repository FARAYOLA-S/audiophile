import React from 'react'

function PageTitle(props) {
  return (
    <div className='bg-[#101010] mb-12 pb-6  text-center'>
        <h1 className='uppercase font-bold text-white text-3xl'>
        {props.title}
        </h1>
        
    </div>
  )
}

export default PageTitle