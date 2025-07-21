import React from 'react';
import TiltText from './TiltText';
import BottomText from './BottomText';

function Page1() {
  return (
    <div className="h-screen px-3 py-3 relative overflow-hidden">
      <div className="shadow-2xl shadow-gray-600 h-full w-full rounded-3xl bg-[url('/aa.png')] bg-cover bg-no-repeat relative">
        <img src="/Logoo.png" alt="" className="absolute top-4 left-4 w-16 md:w-20" />
        <TiltText />
        <BottomText />
      </div>
    </div>
  );
}

export default Page1;
