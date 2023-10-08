import "../globals.css";

import DashboardHeader from "./components/DashboardHeader";
import DashboardMenu from "./components/DashboardMenu";
import Notification from "./components/Notificacion";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="bg-gray-100">
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          {/* Menú lateral */}
          <DashboardMenu />
          {/* Contenido principal */}
          <main className="lg:flex-1 p-4 flex flex-col min-h-screen">
            {/* Encabezado del contenido principal */}
            <Notification/>
            <header className="mb-4">
              {/* Contenido del encabezado */}
              <DashboardHeader/>
            </header>

            {/* Contenido del cuerpo */}
            <div className="bg-white p-4 shadow flex-1">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
