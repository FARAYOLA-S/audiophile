import React from 'react'

function ProductGallery(props) {
  return (
    <div className='md:grid  gap-2 lg:gap-4 grid-rows-2 grid-cols-2 '>
        <img src={props.src}  className='mb-4 rounded-lg md:mb-0'/>
        <img src={props.src2} className='mb-4 rounded-lg md:mb-0  '/>
        <img src={props.src3} className='rounded-lg row-start-1 row-end-3 col-start-2 col-end-3 md:h-[440px] lg:h-[530px]' />
    </div>
  )
}

export default ProductGallery