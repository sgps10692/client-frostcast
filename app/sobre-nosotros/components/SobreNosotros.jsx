import Image from 'next/image'
export default function Nosotros() {
    return (
        <div className="bg-white flex flex-col items-center relative py-4 px-8 z-10 m-6">
        <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-2 font-work-sans">Sobre Nosotros</h2>
            <h1 className="text-6xl font-bold text-black font-work-sans">¿Cual Es El Equipo De Desarollo</h1>
        </div>
        <div className="flex justify-between space-x-40 py-4 px-8 mt-10">
    <div className="flex flex-col items-center">
      <Image src="/avatar06.png" alt="Miembro 1" width={200} height={100} className="w-50 h-50 rounded-full" />
      <h3 className="text-lg font-bold mt-4">Julian Camacho</h3>
      <p className="text-sm">Ingeniero</p>
    </div>
    <div className="flex flex-col items-center">
      <Image src="/avatar06.png" alt="Miembro 2" width={200} height={100} className="w-50 h-50 rounded-full" />
      <h3 className="text-lg font-bold mt-4">Robinson Castillo</h3>
      <p className="text-sm">Ingeniero</p>
    </div>
    <div className="flex flex-col items-center">
      <Image src="/avatar06.png" alt="Miembro 3" width={200} height={100} className="w-50 h-50 rounded-full" />
      <h3 className="text-lg font-bold mt-4">Joseph López</h3>
      <p className="text-sm">Semillero</p>
    </div>
    <div className="flex flex-col items-center">
      <Image src="/avatar06.png" alt="Miembro 4" width={200} height={100} className="w-50 h-50 rounded-full" />
      <h3 className="text-lg font-bold mt-4">Juan Pablo</h3>
      <p className="text-sm">Semilero</p>
    </div>
    <div className="flex flex-col items-center">
      <Image src="/avatar06.png" alt="Miembro 5" width={200} height={100} className="w-50 h-50 rounded-full" />
      <h3 className="text-lg font-bold mt-4">Cristian</h3>
      <p className="text-sm">Semillero</p>
    </div>
  </div>
</div>
    ) 
  }