import Image from 'next/image'
export default function Homeu() {
    return (
      <div className="bg-blue-600 h-screen flex flex-col items-center relative py-10 px-8">
        <div className="absolute inset-0 bg-contain bg-no-repeat" style={{ backgroundImage: `url(/fondo.png)`, zIndex: 0}}></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-contain bg-no-repeat bg-bottom z-0" style={{ backgroundImage: `url(/fondo2.png)`}}></div>
        <div className="absolute inset-0 bottom-0 left-0 w-full h-full bg-contain bg-no-repeat" style={{ backgroundImage: `url(/fondo3.png)`}}></div>
          <div className="text-center relative z-10">
            <h1 className="text-4xl font-bold text-blue-500 mb-1">
              ¿Qué es?</h1>
            <h1 className="text-4xl font-bold font-work-sans mb-6">
              MODELO DE MACHINE LEARNING
              <br />
              PARA PRONOSTICAR POSIBLES HELADAS
            </h1></div>
        <div className="h-screen flex items-center relative">
          <div className="flex justify-between space-x-8 py-4 px-8">
          <div className="flex flex-col items-center max-w-md text-center">
              <Image src="/desarrollo.png" alt="Imagen 1" width={200} height={500} className="w-42 h-50 "/>
                  <h2 className="text-2xl font-bold font-work-sans mt-4 text-center">Desarrollo</h2>
                  <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="flex flex-col items-center max-w-md text-center">
              <Image src="/meteo.png" alt="Imagen 1" width={250} height={500} className="w-50 h-50 rounded-full" />
                  <h2 className="text-2xl font-bold font-work-sans mt-4 text-center">Variables Meteorologicas</h2>
                  <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          <div className="flex flex-col items-center max-w-md text-center">
            <Image src="/equipo.png" alt="Imagen 1" width={250} height={500} className="w-50 h-50 rounded-full" />
            <h2 className="text-2xl font-bold font-work-sans mt-4 text-center">Equipo De Desarrollo</h2>
            <p className="text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </div>
          <div className="bg-white w-1/3 flex flex-col p-6 rounded-md mt-8">
          <h1 className="text-2xl font-bold mb-4 text-center">¡CONSULTA PRONOSTICOS Y PREDICIONES AHORA!</h1>
            <div className="relative w-full">
              <select className="bg-transparent border border-transparent text-blue-500 rounded-lg w-full text-left text-xl">
                <option value="estacion1">Estación 1</option>
                <option value="estacion2">Estación 2</option>
                <option value="estacion3">Estación 3</option>
                <option value="estacion4">Estación 4</option>
                <option value="estacion5">Estación 5</option>
              </select>
            </div>
          <div className="bg-blue-400 w-full h-20 mt-4 rounded-lg">
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg self-center mt-4 text-xl font-work-sans font-bold">¡Mas Información!</button>
          </div>
        </div>
      </div>
    ) 
  }