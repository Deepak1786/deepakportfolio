import React from 'react'

function page3() {
  return (
    <div className=' relative  items-center justify-center hidden md:flex'>
      <img className='absolute z-20 h-[49vh] mt-13' src="lap.png" alt="" />
      <video autoPlay muted loop className='relative z-10 h-[69vh] w-[30vw] object-contain' src="moon.mp4"></video>
      <div className="h-0.5 w-2/4 absolute z- top-[30%] mt-5 left-1/4 -translate-x-1/2 bg-black"></div>
      <div className="h-0.5 w-4/6 absolute z- top-[55%] mt-5 left-1/6 -translate-x-1/2 bg-black"></div>
      <div className="h-0.5 w-3/5 absolute z- top-[80%] mt-5 left-1/5 -translate-x-1/2 bg-black"></div>
    </div>
  )
}

export default page3