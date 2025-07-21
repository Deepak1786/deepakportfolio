import React from 'react';

function TiltText() {
  return (
    <>
      {/* Big screens only */}
      <div className='absolute mt-60 ml-224 text-white hidden md:block'>
        <h1 className='text-[9vw] leading-7 uppercase tracking-wider font-[font1]'>
          I am <span className='text-black'>Web</span>
        </h1>
        <h1 className='text-[10vw] uppercase tracking-wider font-[font1]'>Developer</h1>
        <h1 className='text-[9vw] leading-7 uppercase tracking-wider font-[font1]'>To Hire</h1>
      </div>

      {/* Small screens only */}
      <div className='absolute mt-120 w-full px-4 text-white text-center block md:hidden'>
        <h1 className='text-[10vw] leading-tight uppercase tracking-wider font-[font1]'>
          I am <span className='text-gray-700'>Web</span> Developer
        </h1>
        <h1 className='text-[9vw] uppercase tracking-wider font-[font1]'>To Hire</h1>
      </div>
    </>
  );
}

export default TiltText;