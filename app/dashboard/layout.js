import "../globals.css";

import DashboardHeader from "./components/DashboardHeader";
import DashboardMenu from "./components/DashboardMenu";
import Notification from "./components/Notificacion";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <div className="flex h-screen">
          <DashboardMenu />
          <div className="flex-grow flex flex-col">
            <DashboardHeader />
            {children}
          </div>
          <Notification />
        </div>
      </body>
    </html>
  );
}
