import React, { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiLogOut } from 'react-icons/fi';
import MenuItem from './MenuItem';

const DashboardMenu = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeLink, setActiveLink] = useState('map');

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={`h-screen flex flex-col justify-around rounded-r-lg bg-green-600 ${isExpanded ? 'w-88' : 'w-20'}`}>
      <div className="p-5 my-4">
        <div className="flex items-center space-x-4">
          <Image src="/avatar06.png" alt="User Image" width={75} height={75} className="w-auto h-auto rounded-full" />
          <div className={isExpanded ? 'block' : 'hidden'}>
            <h3 className="text-white text-lg">Nombre de Usuario</h3>
            <p className="text-gray-300">Nombre de la Ciudad</p>
          </div>
        </div>
      </div>
      <div className="p-5 my-8">
        <nav className="mt-10 space-y-4 self-center">
          <MenuItem
            href=""
            icon="map"
            label="Mapa"
            active={activeLink === 'map'}
            isExpanded={isExpanded}
            onClick={() => handleLinkClick('map')}
          />
          <MenuItem
            href=""
            icon="trendingUp"
            label="Predicciones"
            active={activeLink === 'predictions'}
            isExpanded={isExpanded}
            onClick={() => handleLinkClick('predictions')}
          />
          <MenuItem
            href=""
            icon="sun"
            label="Variables Meteorologicas"
            active={activeLink === 'variables'}
            isExpanded={isExpanded}
            onClick={() => handleLinkClick('variables')}
          />
          <MenuItem
            href=""
            icon="bell"
            label="Notificaciones"
            active={activeLink === 'notifications'}
            isExpanded={isExpanded}
            onClick={() => handleLinkClick('notifications')}
          />
          <MenuItem
            href=""
            icon="user"
            label="Perfil"
            active={activeLink === 'profile'}
            isExpanded={isExpanded}
            onClick={() => handleLinkClick('profile')}
          />
        </nav>
      </div>
      <div className="p-5 my-8">
      <nav className="mt-10 space-y-2 self-center">
      <a onClick={toggleMenu} className="cursor-pointer flex items-center justify-between text-2xl p-2 rounded-md text-gray-300 hover:text-white">
            {isExpanded ? (
              <>
                <span>Contraer </span>
                <FiChevronLeft />
              </>
            ) : (
              <FiChevronRight className='text-black' />
            )}
        </a>
        <a className="cursor-pointer flex items-center justify-between text-2xl p-2 rounded-md text-gray-300 hover:text-white">
            <span className={isExpanded ? 'block' : 'hidden'}>Cerrar Sesion</span>
            <FiLogOut  />
        </a>
      </nav>
      </div>
    </div>
  );
};

export default DashboardMenu;
