export default function CasoDeHeladaComponente() {
    return (
        <>
        <header className="bg-green-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold">Qué Hacer en Caso de Helada</h1>
        </div>
      </header>
      <div className="container mx-auto py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Consejos para Enfrentar una Helada
          </h2>
          <p className="text-gray-700">
            Las heladas pueden ser perjudiciales para tus plantas y cultivos,
            especialmente en climas fríos. Aquí te proporcionamos información
            detallada sobre qué hacer en caso de helada:
          </p>
          <ol className="list-decimal ml-6 mt-4">
            <li>
              <h3 className="text-xl font-semibold">
                Mantén tus Plantas Cubiertas
              </h3>
              <p>
                Utiliza lonas, mantas o campanas para cubrir tus plantas durante
                la noche y protegerlas del frío.
              </p>
            </li>
            <li className="mt-4">
              <h3 className="text-xl font-semibold">Riega tus Plantas</h3>
              <p>
                Riega tus plantas por la tarde para mantener el suelo húmedo, ya
                que el agua retiene el calor y ayuda a prevenir la formación de
                hielo.
              </p>
            </li>
            <li className="mt-4">
              <h3 className="text-xl font-semibold">
                Utiliza Sistemas de Riego por Goteo
              </h3>
              <p>
                Los sistemas de riego por goteo ayudan a mantener el suelo
                constantemente húmedo sin mojar las hojas, lo que puede causar
                daños adicionales.
              </p>
            </li>
            <li className="mt-4">
              <h3 className="text-xl font-semibold">Traslada tus Plantas</h3>
              <p>
                Si es posible, traslada tus plantas a un lugar protegido o al
                interior de tu hogar durante las noches frías de helada.
              </p>
            </li>
            <li className="mt-4">
              <h3 className="text-xl font-semibold">Instala Luces de Calor</h3>
              <p>
                En áreas críticas, puedes instalar luces de calor cerca de tus
                plantas para mantener una temperatura adecuada.
              </p>
            </li>
          </ol>
          <p className="text-gray-700 mt-4">
            Recuerda monitorear las condiciones climáticas y estar preparado
            para tomar medidas adicionales si es necesario. Siguiendo estos
            consejos, puedes proteger tus plantas y cultivos de las heladas y
            minimizar los daños causados por el frío extremo.
          </p>
        </div>
      </div>
        </>
    );
}