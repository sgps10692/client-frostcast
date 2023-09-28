import "../globals.css";

import DashboardHeader from "./components/DashboardHeader";
import DashboardMenu from "./components/DashboardMenu";
import Notification from "./components/Notificacion";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="bg-gray-100">
        <div className="flex">
          <DashboardMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
