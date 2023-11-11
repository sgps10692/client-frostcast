import React from 'react';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="bg-gray-600 rounded-tl-[50px] rounded-tr-[50px] py-4 px-8 relative">
            <div className="absolute left-0 top-0 w-1/3 h-full bg-no-repeat bg-contain bg-bottom z-0" style={{ backgroundImage: `url('/Building.png')`}}></div>
            <div className="absolute left-1/3 top-0 w-1/3 h-full bg-no-repeat bg-contain bg-bottom z-0" style={{ backgroundImage: `url('/Building.png')`}}></div>
            <div className="absolute right-0 top-0 w-1/3 h-full bg-no-repeat bg-contain bg-bottom z-0" style={{ backgroundImage: `url('/Building.png')`}}></div>
            <div className="relative flex flex-col lg:flex-row justify-between items-center space-x-8 space-y-3 lg:space-y-0">
                <Image src="/ceet.png" alt="Logo CEET" className="w-auto h-auto" width={500} height={20}/>
                <Image src="/frostcast.png" alt="Logo Frostcast" className="w-auto h-auto" width={500} height={20}/>
                <Image src="/sennova.png" alt="Logo Sennova" className="w-auto h-auto" width={350} height={20}/>
            </div>
        </footer>
    );
}

export default Footer;