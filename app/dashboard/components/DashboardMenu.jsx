import React from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiLogOut } from "react-icons/fi";
import MenuItem from "./MenuItem";

const DashboardMenu = () => {
  return (
    <div className="h-screen flex flex-col justify-around rounded-r-lg bg-green-600 w-1/4">
      <div className="p-5 my-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/avatar06.png"
            alt="User Image"
            width={75}
            height={75}
            className="w-auto h-auto rounded-full"
          />
          <div className="block">
            <h3 className="text-white text-lg">Gustavo</h3>
            <p className="text-gray-300">Bogotá</p>
          </div>
        </div>
      </div>
      <div className="p-5 my-8">
        <nav className="mt-10 space-y-4 self-center">
          <MenuItem href="/dashboard" icon="map" label="Mapa" />
          <MenuItem
            href="/dashboard/predicciones"
            icon="trendingUp"
            label="Predicciones"
          />
          <MenuItem
            href="/dashboard/variables-meteorologicas"
            icon="sun"
            label={
              <div>
                <span>Variables</span>
                <br />
                <span>Meteorologicas</span>
              </div>
            }
          />
          <MenuItem href="/dashboard/perfil" icon="user" label="Perfil" />
        </nav>
      </div>
      <div className="p-5 my-8">
        <nav className="mt-10 space-y-2 self-center">
          <a className="cursor-pointer flex items-center justify-between text-2xl p-2 rounded-md text-gray-300 hover:text-white">
            <FiChevronRight className="text-black" />
          </a>
          <a className="cursor-pointer flex items-center justify-between text-2xl p-2 rounded-md text-gray-300 hover:text-white">
            <span className="block">Cerrar Sesion</span>
            <FiLogOut />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default DashboardMenu;
