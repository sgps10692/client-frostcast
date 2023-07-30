import React from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Imager from '../../public/variables.png';

const Meteorologicas = () => {
  return (
    <div className="bg-blue-300 py-10 px-8 text-white">
            <div className=" text-center">
                <h2 className="text-4xl font-bold text-blue-800 mb-2 font-work-sans">Puedes Consultar las:</h2>
                <h1 className="text-6xl font-bold font-work-sans">Variables Meteorologicas</h1>
            </div>
        <div className="flex justify-around py-10 px-8">
            <ul className="flex flex-col space-y-9 mt-8">
                <li className="text-white text-xl flex items-center font-work-sans" style={{ whiteSpace: 'nowrap' }}>
                    <FontAwesomeIcon icon={faCircle} width={20} height={20} className="mr-4 mt-0"/>
                    Humedad Relativa</li>
                <li className="text-white text-xl flex items-center font-work-sans" style={{ whiteSpace: 'nowrap' }}>
                    <FontAwesomeIcon icon={faCircle} width={20} height={20} className="mr-4 mt-0"/>
                    Velocidad Del Viento</li>
                <li className="text-white text-xl flex items-center font-work-sans" style={{ whiteSpace: 'nowrap' }}>
                    <FontAwesomeIcon icon={faCircle} width={20} height={20} className="mr-4 mt-0"/>
                    Temperatura</li>
                <li className="text-white text-xl flex items-center font-work-sans" style={{ whiteSpace: 'nowrap' }}>
                    <FontAwesomeIcon icon={faCircle} width={20} height={20} className="mr-4 mt-0"/>
                    Precipitaciones</li>
                <li className="text-white text-xl flex items-center font-work-sans" style={{ whiteSpace: 'nowrap' }}>
                    <FontAwesomeIcon icon={faCircle} width={20} height={20} className="mr-4 mt-0"/>
                    Radiacion Solar</li>
                <li className="text-white text-xl flex items-center font-work-sans" style={{ whiteSpace: 'nowrap' }}>
                    <FontAwesomeIcon icon={faCircle} width={20} height={20} className="mr-4 mt-0"/>
                    Ubicacion</li>
                <li className="text-white text-xl flex items-center font-work-sans" style={{ whiteSpace: 'nowrap' }}>
                    <FontAwesomeIcon icon={faCircle} width={20} height={20} className="mr-4 mt-0"/>
                    Clima</li>
                <li className="text-white text-xl flex items-center font-work-sans" style={{ whiteSpace: 'nowrap' }}>
                    <FontAwesomeIcon icon={faCircle} width={20} height={20} className="mr-4 mt-0"/>¡Y Mas!</li>
            </ul>
            <Image src={Imager} alt="Imagen Del Dashboard" className="w-1/2"/>
        </div>
        <div className="text-center mt-8">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg self-center mt-4 text-xl font-work-sans font-bold">¡Consultar!</button>
        </div>
    </div>
  );
};

export default Meteorologicas;
