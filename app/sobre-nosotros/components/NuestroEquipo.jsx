import Image from "next/image";
export default function Nosotros() {
  return (
    <div>
      <div className="text-center">
      <h1 className="text-5xl font-bold text-green-600 mb-1 font-work-sans">Nuestro Equipo</h1>
      <div className="w-1/2 mx-auto border-b-8 border-gray-400"></div>
      </div>
      <div className="grid mx-32 mb-8 mt-8 md:mb-12 md:grid-cols-2">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-gray-800">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">¡Lo Mejor Para Los Campesinos!</h3>
            <p className="my-4">"Mi mayor objetivo, fue mejorar y dar soluciones a los cultivos de los campesinos de la sabana de Bogotá"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-center">
                <div>Julian</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Ingeniero</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-gray-800">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nuestro Modelo De Machine Learning</h3>
            <p className="my-4">"El desarrollo de este modelo fue un gran recorrido, pero se que ayudara a los cultivos agricolas"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-center">
                <div>Cristian Raúl Granados</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Desarrollo Del Modelo</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-gray-800">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nuestra Api Confiable Y Concisa</h3>
            <p className="my-4">"Gracias a nuestra API, el sistema podra comunicarse con el modelo y poder ser usada por el Usuario"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-center">
                <div>Juan Pablo Sanabria</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Desarrollo BackEnd</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">El Desarrollo De La Interfaz De Usuario</h3>
            <p className="my-4">"Di lo mejor de mi para este proyecto, siempre pensando en nuestros Usuarios para la facilidad de uso"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <div className="space-y-0.5 font-medium dark:text-white text-center">
                <div>Joseph López Henao</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Desarrollo FrontEnd</div>
            </div>
        </figcaption>    
    </figure>
</div>
    </div>
  );
}
