import React from "react";
import Image from 'next/image';

const Mapa = () => {
  return (
    <div className="h-screen relative py-10 px-8">
      <div
        className="absolute inset-0 bottom-0 left-0 w-auto h-auto bg-contain bg-no-repeat bg-bottom m-8"
        style={{ backgroundImage: `url(/MapaEstaciones2.png)`}}>
      </div>
    <button data-modal-target="staticModal" data-modal-toggle="staticModal" className="text-black absolute" type="button">
      ...
    </button>
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-4xl font-semibold text-gray-900 dark:text-white font-work-sans">
                    RESULTADOS DE LA UBICACION SELECIONADA:
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Cerrar Modal</span>
                </button>
            </div>  
            <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Datos prediccion etc.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Variables Meteorologicas
                </p>
            </div>
            <div className="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <Image src="/frostderecha.png" alt="Logo Sena" width={200} height={200} />
                <button data-modal-hide="staticModal" type="button" className="text-white bg-green-600 hover:bg-green-500 text-xl font-work-sans ml-auto font-w font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline">¡Continuar!</button>
            </div>
        </div>
    </div>
  </div>
</div>
  );
};

export default Mapa;