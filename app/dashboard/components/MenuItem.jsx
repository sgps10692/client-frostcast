import React from "react";
import Link from "next/link";
import {
  FiUser,
  FiMap,
  FiBell,
  FiLogOut,
  FiTrendingUp,
  FiSun,
} from "react-icons/fi";

const MenuItem = ({ href, active, icon, label, isExpanded, onClick }) => {
  // Add iconSize as prop

  const getIcon = () => {
    const iconSize = isExpanded ? 25 : 26; // 30 for large size, 20 for default size
    switch (icon) {
      case "user":
        return <FiUser size={iconSize} />; // Add size prop to the icons
      case "map":
        return <FiMap size={iconSize} />;
      case "bell":
        return <FiBell size={iconSize} />;
      case "logout":
        return <FiLogOut size={iconSize} />;
      case "trendingUp":
        return <FiTrendingUp size={iconSize} />;
      case "sun":
        return <FiSun size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <Link href={href} legacyBehavior>
      <a
        className={`flex items-center justify-between font-work-sans text-2xl p-3 rounded-md ${
          active
            ? "bg-white text-black font-bold"
            : "text-white hover:text-black"
        }`}
      >
        <span>{label}</span>
        {getIcon()}
      </a>
    </Link>
  );
};

export default MenuItem;
