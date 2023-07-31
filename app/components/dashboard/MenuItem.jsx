import React from 'react';
import Link from 'next/link';
import { FiUser, FiMap, FiBell, FiLogOut, FiTrendingUp, FiSun } from 'react-icons/fi';

const MenuItem = ({ href, active, icon, label, isExpanded, onClick }) => {
  const getIcon = () => {
    switch (icon) {
      case 'user':
        return <FiUser />;
      case 'map':
        return <FiMap />;
      case 'bell':
        return <FiBell />;
      case 'logout':
        return <FiLogOut />;
      case 'trendingUp':
        return <FiTrendingUp />;
      case 'sun':
        return <FiSun />;
      default:
        return null;
    }
  };

  return (
    <Link href={href} legacyBehavior>
      <a
        onClick={onClick}
        className={`flex items-center justify-between font-work-sans text-2xl p-3 rounded-md ${
          active ? 'bg-white text-black font-bold' : 'text-white hover:text-black'
        }`}
      >
        {isExpanded && <span>{label}</span>}
        {getIcon()}
      </a>
    </Link>
  );
};

export default MenuItem;
