import React from 'react';

const Card = ({ titulo, descripcion }) => {
  return (
    <div className="bg-gray-500 rounded-md p-4 flex-grow md:w-full text-center">
      <h2 className="text-white text-2xl font-bold font-work-sans mb-2">{titulo}</h2>
      <p className="text-white">{descripcion}</p>
      <button className="bg-green-600 hover:bg-green-500 text-white text-lg font-work-sans font-bold py-2 px-4 rounded">
        Consultar
      </button>
    </div>
  );
};

const CardsContainer = () => {
  const cardsData = [
    {
      titulo: 'Ubicacion 1',
      descripcion: 'Descripción de la Ubicacion 1',
    },
    {
      titulo: 'Ubicacion 2',
      descripcion: 'Descripción de la Ubicacion 2',
    },
    {
      titulo: 'Ubicacion 3',
      descripcion: 'Descripción de la Ubicacion 3',
    },
    {
      titulo: 'Ubicacion 4',
      descripcion: 'Descripción de la Ubicacion 4',
    },
    {
      titulo: 'Ubicacion 5',
      descripcion: 'Descripción de la Ubicacion 5',
    },
    {
      titulo: 'Ubicacion 6',
      descripcion: 'Descripción de la Ubicacion 6',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center h-full">
      {cardsData.map((data, index) => (
        <Card key={index} titulo={data.titulo} descripcion={data.descripcion} />
      ))}
    </div>
  );
};

export default CardsContainer;