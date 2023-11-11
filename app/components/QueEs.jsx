import React from "react";
import Image from "next/image";

const QueEs = () => {
  return (
    <div className="bg-white flex flex-col items-center relative py-10 px-8 z-10 m-6">
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{ backgroundImage: `url(/fondolineas.png)`, zIndex: 0 }}
      ></div>
      <div className="relative">
        <div className="flex flex-col md:flex-row justify-around mt-10 items-center">
          <div className="mx-40 mb-8 md:mb-0 md:w-1/2 text-center md:text-right">
            <Image
              src="/pronosticos.png"
              alt="Imagen 1"
              width={400}
              height={20}
            />
          </div>
          <div className="mx-40 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-500 mb-2 font-work-sans">
              Pronósticos
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-black font-work-sans">
              ¡Predecir las próximas heladas!
            </h1>
            <p className="text-sm md:text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around mt-20 items-center">
          <div className="mx-40 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-500 mb-2 font-work-sans">
              Pronósticos
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-black font-work-sans">
              ¡Predicción de variables meteorológicas!
            </h1>
            <p className="text-sm md:text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mx-40 md:w-1/2">
            <Image src="/prediccion.png" alt="Imagen 1" width={400} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueEs;