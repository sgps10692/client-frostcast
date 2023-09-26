import React from "react";

export default function NuestraHistoria() {
  return (
    <div>
    <div className="text-center p-10 m-8 mb-32">
      <h1 className="text-5xl font-bold text-black mb-1 font-work-sans">Sobre Nosotros</h1>
      <h1 className="text-5xl font-bold text-green-600 mb-1 font-work-sans">Nuestra Historia</h1>
      <div className="w-1/2 mx-auto border-b-8 border-gray-400 mb-8"></div>
      <div className="bg-green-600 border-2 border-green-900 rounded-[20px] rounded-br-[200px] p-10 pr-10 mt-4 h-[23rem] ">
        <p className="text-white text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique, turpis ut varius eleifend, mauris est venenatis nulla,
          vitae sodales ex ipsum nec tortor. Nullam vitae imperdiet mi.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Etiam auctor bibendum fermentum.
        </p>
        <div className="relative bottom-0 top-16 left-0 right-0 flex justify-center mb-8">
          <img
            src="nosotros.jpg"
            alt="Imagen de la sección"
            width={1000} height={1000}
            className="rounded-tl-[50px] mb-8"
          />
        </div>
      </div>
    </div>
    </div>
  );
};