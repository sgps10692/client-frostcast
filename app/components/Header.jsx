import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white">
      <div className="flex justify-between items-center bg-white py-4 px-8">
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
      <div className="bg-[#ecf8fe] p-5 mt-2 flex justify-between items-center py-4 px-8">
        <ul className="flex space-x-9 items-center">
          <li className="flex items-center">
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
          <a href="/" className="font-work-sans text-xl">
            Sobre Nosotros
          </a>
        </ul>
        <div className="flex space-x-9 items-center">
          <Link href="/login" legacyBehavior>
            <a className="font-work-sans font-bold text-xl">Iniciar Sesión</a>
          </Link>
          <div className="border-r border-black h-6"></div>
          <Link href="/registro" legacyBehavior>
            <a className="bg-green-600 text-whiter px-5 py-2 rounded-lg font-work-sans text-xl">
              ¡Registrarse!
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
