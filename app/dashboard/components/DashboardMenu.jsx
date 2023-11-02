import Link from "next/link";
import Image from "next/image";
import { FaHome, FaChartBar, FaCloudSun, FaUser } from "react-icons/fa";

const links = [
  {
    route: "/dashboard",
    icon: <FaHome />,
  },
  {
    route: "/dashboard/predicciones",
    icon: <FaChartBar />,
  },
  {
    route: "/dashboard/variables-meteorologicas",
    icon: <FaCloudSun />,
  },
  // Puedes agregar más enlaces aquí si es necesario
];

export default function Sidebar() {
  return (
    <aside className="flex w-20 flex-col items-center border-r border-gray-200 bg-green-600 overflow-y-auto flex-shrink-0">
      <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-3">
        <Image src="/senanegro.png" width="40" height="10"></Image>
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.route}
            className="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50"
          >
            {link.icon}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
