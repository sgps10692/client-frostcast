import React from 'react';
import Image from 'next/image';
import fondo1 from '../../public/fondonubes.png';
import fondo2 from '../../public/particulas.png';
import fondo3 from '../../public/fondolineas.png';
import prediccion from '../../public/prediccion.png';
import pronosticos from '../../public/pronosticos.png';

const QueEs = () => {
  return (
      <div className="bg-white flex flex-col items-center relative py-10 px-8 z-10 m-6">
        <div className="flex justify-around mt-10 items-center">
          <div className="mx-40">
            <Image src={pronosticos} alt="Imagen 1" width={400} height={20} />
          </div>
          <div className="mx-40 text-right">
            <h2 className="text-4xl font-bold text-blue-500 mb-2 font-work-sans">Pronosticos</h2>
            <h1 className="text-6xl font-bold text-black font-work-sans">¡Predecir las proximas heladas!</h1>
            <p className="text-black text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
            </br>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4 text-xl font-work-sans font-bold">¡Saber Mas!</button>
          </div>
        </div>
        <div className="flex justify-around mt-20 items-center">
            <div className="mx-40">
            <h2 className="text-4xl font-bold text-blue-500 mb-2 font-work-sans">Pronosticos</h2>
            <h1 className="text-6xl font-bold text-black font-work-sans">¡Prediccion de variables meteorologicas!</h1>
            <p className="text-black text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
            </br>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4 text-xl font-work-sans font-bold">¡Saber Mas!</button>
          </div>
          <div className="mx-40">
            <Image src={prediccion} alt="Imagen 1" width={400} height={20} />
          </div>
        </div>
    </div>
  );
};

export default QueEs;
