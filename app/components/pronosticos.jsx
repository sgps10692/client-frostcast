import Image from "next/image";
import GetPronosticos from "./components/GetPronostico";

async function getUbicaciones() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/locations/", {
      cache: "no-cache",
    });
    const locations = await res.json();

    return locations.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    // Puedes retornar un valor por defecto o un array vacío en caso de error
    return [];
  }
}

export default async function Homeu() {
  const locations = await getUbicaciones();

  return (
    <div className="bg-blue-600 h-screen flex flex-col items-center relative py-10 px-8">
      <div
        className="absolute inset-0 bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(/fondo.png)`, zIndex: 0 }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-contain bg-no-repeat bg-bottom z-0"
        style={{ backgroundImage: `url(/fondo2.png)` }}
      ></div>
      <div
        className="absolute inset-0 bottom-0 left-0 w-full h-full bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(/fondo3.png)` }}
      ></div>
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-bold text-blue-500 mb-1">¿Qué es?</h1>
        <h1 className="text-4xl font-bold font-work-sans mb-6">
          MODELO DE MACHINE LEARNING
          <br />
          PARA PRONOSTICAR POSIBLES HELADAS
        </h1>
      </div>
      <div className="h-screen flex items-center relative">
        <div className="flex justify-between space-x-8 py-4 px-8">
          <div className="flex flex-col items-center max-w-md text-center">
            <Image
              src="/desarrollo.png"
              alt="Imagen 1"
              width={200}
              height={500}
              className="w-42 h-50 "
            />
            <h2 className="text-2xl font-bold font-work-sans mt-4 text-center">
              Desarrollo
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-md text-center">
            <Image
              src="/meteo.png"
              alt="Imagen 1"
              width={250}
              height={500}
              className="w-50 h-50 rounded-full"
            />
            <h2 className="text-2xl font-bold font-work-sans mt-4 text-center">
              Variables Meteorologicas
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-md text-center">
            <Image
              src="/equipo.png"
              alt="Imagen 1"
              width={250}
              height={500}
              className="w-50 h-50 rounded-full"
            />
            <h2 className="text-2xl font-bold font-work-sans mt-4 text-center">
              Equipo De Desarrollo
            </h2>
            <p className="text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <GetPronosticos locations={locations} />
        </div>
      </div>
    </div>
  );
}
