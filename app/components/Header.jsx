'use client'
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0 bg-white py-4 px-8">
        <Image
          src="/gics.png"
          alt="Logo De Gics"
          className="w-auto h-auto"
          width={250}
          height={25}
        />
        <Image
          src="/colombia2.png"
          alt="Logo Colombia potencia de la vida"
          className="w-auto h-auto"
          width={250}
          height={25}
        />
      </div>
      <div className="bg-[#ecf8fe] p-5 mt-2 flex flex-col lg:flex-row justify-between items-center py-4 px-8">
        <ul className="flex flex-col lg:flex-row space-x-9 items-center space-y-3 lg:space-y-0">
          <li className="flex items-center mb-3 lg:mb-0">
            <FontAwesomeIcon
              icon={faHouse}
              width={20}
              height={20}
              className="mr-4 mt-0"
            />
            <a href="/" className="font-work-sans text-xl">
              Inicio
            </a>
          </li>
          <Link href="/sobre-nosotros" className="font-work-sans text-xl">
            Sobre Nosotros
          </Link>
          <Link
            href="/que-hacer-en-caso-de-heladas"
            className="font-work-sans text-xl"
          >
            Qué Hacer en Caso de Heladas
          </Link>
        </ul>
        <div className="flex space-x-9 items-center mt-3 lg:mt-0">
          <Link href="/dashboard" legacyBehavior>
            <a className="font-work-sans font-bold text-xl">Ir a Dashboard</a>
          </Link>
          <div className="border-r border-black h-6"></div>
          <Link href="/registro" legacyBehavior>
            <a className="bg-green-600 text-white px-5 py-2 rounded-lg font-work-sans text-xl">
              ¡Registrarse!
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;