import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import HomeIconSvg from 'public/casasilueta.svg'
import colombia from 'public/colombia.png'
import gics from 'public/gics.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fros-Cast',
  description: 'Proyecto De Investigacion FrostCast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header class="bg-white">
      <div class="flex justify-between items-center bg-white py-4 px-8">
        <Image src={gics} alt="Logo De Gics" width={250} height={25} priority/>
        <Image src={colombia} alt="Logo Colombia potencia de la vida" width={250} height={25} priority/>
      </div>
      <div class="bg-[#ecf8fe] p-5 mt-2 flex justify-between items-center py-4 px-8">
        <ul class="flex space-x-9 items-center">
          <li class="flex items-center">
          <Image src={HomeIconSvg} alt="Home Icon" width={20} height={20} className="mr-4 mt-0"/>
            <a href="/" class="text-xl">Inicio</a>
          </li>
          <li>
            <a href="/" class="text-xl">Sobre Nosotros</a>
          </li>
        </ul>
        <div class="flex space-x-9 items-center">
            <a href="/" class="text-xl">Iniciar Sesión</a>
            <a href="/" class="bg-green-600 text-white px-5 py-2 rounded-lg text-xl">Registrarse</a>
        </div>
      </div>
      </header>
      <body>{children}</body>
    </html>
  )
}
