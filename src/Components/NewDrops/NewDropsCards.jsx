
import React from 'react'

function NewdropsCards({ children, imgsrc, ...props }) {

   

  return (
    <div {...props} className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group' >

    <img src={imgsrc} alt="" className='transition-transform group-hover:scale-110 duration-200 ' />

    <div className='absolute inset-0 flex items-end bg-gradient-to-b from-black/60  to-transparent'>
        <div className='p-4 text-white' >
            {children}
        </div>
    </div>

    </div>
  )
}

export default NewdropsCards