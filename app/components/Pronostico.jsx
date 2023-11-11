import Image from "next/image";
import GetPronosticos from "./Fetch/GetPronostico";

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
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-sky-400">
            {" "}
            Herramienta para Pronóstico de Variables Climáticas
          </span>{" "}
        </h1>
        <br></br>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-sky-400">
            {" "}
            Fundamentales en Agricultura y Heladas
          </span>{" "}
        </h1>
      </div>
      <div className="h-screen flex items-center relative" style={{ flexWrap: 'wrap', overflow: 'auto' }}>
        <div className="flex flex-col lg:flex-row justify-between space-x-8 space-y-3 lg:space-y-0 py-2 px-3">
          <div className="flex flex-col items-center max-w-md text-center">
            <Image
              src="/desarrollo.png"
              alt="Imagen 1"
              width={200}
              height={500}
              className="w-42 h-50 "
            />
            <h2 className="text-3xl font-bold text-emerald-900">Desarrollo</h2>
            <p className="text-lg">
              A partir de información histórica de variables meteorológicas y de
              heladas e implementando modelos de predicción basados en Machine
              Learning.
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
            <h2 className="text-3xl font-bold text-emerald-900">Objetivo</h2>
            <p className="text-lg">
              Mejorar las decisiones tomadas en las actividades de la
              agricultura, buscando determinar patrones que garanticen mayor
              rendimiento y calidad de los cultivos
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
            <h2 className="text-3xl font-bold text-emerald-900">Equipo</h2>
            <p className="text-lg text-center">
              Grupo GICS. Proyecto de investigación aplicada en el marco de la
              estrategia SENNOVA <a href="/sobre-nosotros" className="text-emerald-900 dark:text-blue-500 hover:underline">Saber Mas..</a>
            </p>
          </div>
          <GetPronosticos locations={locations} />
        </div>
      </div>
    </div>
  );
}
