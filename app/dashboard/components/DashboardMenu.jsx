"use client";

import React, { useState } from "react";
import { FaHome, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-green-600">
      <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2"></div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <a
          href="#"
          className="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50"
        >
          <FaHome className="text-xl" />
          <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
            <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
              <div className="absolute inset-0 -left-1 flex items-center">
                <div className="h-2 w-2 rotate-45 bg-white"></div>
              </div>
              Mapa<span className="text-gray-400"></span>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50"
        >
          <FaChartBar className="text-xl" />
          <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
            <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
              <div className="absolute inset-0 -left-1 flex items-center">
                <div className="h-2 w-2 rotate-45 bg-white"></div>
              </div>
              Gráficos<span className="text-gray-400"></span>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50"
        >
          <FaCog className="text-xl" />
          <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
            <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
              <div className="absolute inset-0 -left-1 flex items-center">
                <div className="h-2 w-2 rotate-45 bg-white"></div>
              </div>
              Configuración<span className="text-gray-400"></span>
            </div>
          </div>
        </a>
      </nav>
    </aside>
  );
}
