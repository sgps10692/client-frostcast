import './globals.css'
import Image from 'next/image'
import HomeIconSvg from 'public/casasilueta.svg'
import colombia from 'public/colombia.png'
import gics from 'public/gics.png'
import FondoFooter from 'public/Building.png'
import ceet from 'public/ceet.png'
import sennova from 'public/sennova.png'
import frost from 'public/frostcast.png'

export const metadata = {
  title: 'Fros-Cast',
  description: 'Proyecto De Investigacion FrostCast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header className="bg-white">
      <div className="flex justify-between items-center bg-white py-4 px-8">
        <Image src={gics} alt="Logo De Gics" width={250} height={25} priority/>
        <Image src={colombia} alt="Logo Colombia potencia de la vida" width={250} height={25} priority/>
      </div>
      <div className="bg-[#ecf8fe] p-5 mt-2 flex justify-between items-center py-4 px-8">
        <ul className="flex space-x-9 items-center">
          <li className="flex items-center">
          <Image src={HomeIconSvg} alt="Home Icon" width={20} height={20} className="mr-4 mt-0"/>
            <a href="/" className="font-work-sans text-xl">Inicio</a>
          </li>
            <a href="/" className="font-work-sans text-xl">Sobre Nosotros</a>
        </ul>
        <div className="flex space-x-9 items-center">
            <a href="/" className="font-work-sans font-bold text-xl">Iniciar Sesión</a>
            <div className="border-r border-gray-600 h-6"></div>
            <a href="/" className="bg-green-600 text-whiter px-5 py-2 rounded-lg font-work-sans text-xl">¡Registrarse!</a>
        </div>
      </div>
      </header>
      <main>{children}</main>
    <footer className="bg-gray-600 rounded-tl-[50px] rounded-tr-[50px] py-4 px-8 relative">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-no-repeat bg-contain bg-bottom z-0" style={{ backgroundImage: `url(${FondoFooter.src})`}}></div>
        <div className="absolute left-1/3 top-0 w-1/3 h-full bg-no-repeat bg-contain bg-bottom z-0" style={{ backgroundImage: `url(${FondoFooter.src})`}}></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-no-repeat bg-contain bg-bottom z-0" style={{ backgroundImage: `url(${FondoFooter.src})`}}></div>
        <div className="relative flex justify-between items-center space-x-8">
            <Image src={ceet} alt="Home Icon" width={500} height={20}/>
            <Image src={frost} alt="Home Icon" width={500} height={20}/>
            <Image src={sennova} alt="Home Icon" width={350} height={20}/>
        </div>
    </footer>
    </html>
  )
}
