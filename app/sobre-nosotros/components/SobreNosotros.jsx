import Image from "next/image";
export default function Nosotros() {
  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">¿Como Empezo Todo?</h2>
          <p className="text-gray-700">
            Somos un equipo de apasionados por la jardinería y la agricultura.
            Nuestra historia comenzó hace más de una década cuando un grupo de
            amigos con un interés común en la horticultura decidió compartir sus
            conocimientos y experiencias en línea.
          </p>
          <p className="text-gray-700 mt-4">
            Desde entonces, hemos estado comprometidos en proporcionar
            información útil y consejos prácticos para ayudarte a proteger tus
            plantas y cultivos de las heladas y otros desafíos climáticos.
            Nuestra misión es que puedas disfrutar de un jardín próspero y
            saludable durante todo el año.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-200 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Juan Pérez</h3>
              <p className="text-gray-700">Experto en Horticultura</p>
            </div>

            <div className="bg-blue-200 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">María López</h3>
              <p className="text-gray-700">Especialista en Agricultura Orgánica</p>
            </div>

            <div className="bg-blue-200 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Carlos Rodríguez</h3>
              <p className="text-gray-700">Diseñador de Jardines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
