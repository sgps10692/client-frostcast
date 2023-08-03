import React from 'react';
import Image from 'next/image';

const DashboardHeader = () => {
  return (
    <div className="w-full bg-white h-16 flex items-center justify-between px-8 shadow-md">
      <Image src="/senaverda.png" alt="Logo Sena" width={50} height={50} />
      <Image src="/frostderecha.png" alt="Logo FrostCast" width={250} height={50} />
    </div>
  );
};

export default DashboardHeader;