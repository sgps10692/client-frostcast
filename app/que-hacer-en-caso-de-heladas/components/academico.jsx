import React from 'react';

export default function AcademicoComponente({ titulo, descripcion, imagen }) {
  return (
      <div className="rounded-md flex justify-around">
          <div className="w-1/2 m-5 flex justify-center">
            <img
              src={imagen}
              alt={titulo}
              className=""
            />
          </div>
          <div className="w-5/6 p-4 flex flex-col justify-center">
            <h1 className="text-green-600 text-4xl mb-2 font-work-sans font-bold whitespace-normal">
              {titulo}
            </h1>
            <p className="text-white text-lg mb-2 whitespace-normal">
              {descripcion}
            </p>
          </div>
        </div>
  );
}