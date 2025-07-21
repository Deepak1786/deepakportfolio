import React from 'react';

function BottomText() {
  return (
    <>
      {/* ✅ Big screens only */}
      <div className='absolute bottom-0 w-full left-0 p-10 pl-28 hidden md:flex items-end justify-between text-white'>
        <div>
          <h2 className='text-xl'>BRAND DESIGN | WEBSITE DESIGN</h2>
          <h3 className='text-gray-400'>BESPOKE FREELANCE</h3>
        </div>
        <div>
          <img src="slogo.avif" alt="" className="w-20 h-auto" />
        </div>
      </div>

      {/* ✅ Small screens only */}
      <div className='absolute bottom-0 w-full left-0 p-6 pl-6 flex md:hidden items-end justify-between text-white'>
        <div>
          <h2 className='text-sm'>BRAND DESIGN | WEBSITE DESIGN</h2>
          <h3 className='text-gray-400 text-xs'>BESPOKE FREELANCE</h3>
        </div>
        <div>
          <img src="slogo.avif" alt="" className="w-12 h-auto" />
        </div>
      </div>
    </>
  );
}

export default BottomText;