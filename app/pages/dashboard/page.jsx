'use client'
import React, { useState } from 'react';
import DashboardMenu from '../../components/dashboard/DashboardMenu';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import Notification from '../../components/dashboard/Notificacion';
import Profile from '../../components/dashboard/Perfil';
import Mapa from '../../components/dashboard/Mapa';
import Notificaciones from '../../components/dashboard/Notificaciones';
import Predicciones from '../../components/dashboard/Prediciones';
import Vari_Meteo from '../../components/dashboard/Vari_Meteo';

const DashboardPage = () => {
  const [showPart, setShowPart] = useState('map');

  const renderComponent = () => {
    switch (showPart) {
      case 'map':
        return <Mapa />;
      case 'notifications':
        return <Notificaciones />;
      case 'predictions':
        return <Predicciones />;
      case 'variables':
        return <Vari_Meteo />;
      case 'profile':
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <DashboardMenu setShowPart={setShowPart}/>
      <div className="flex-grow flex flex-col">
        <DashboardHeader />
        {renderComponent()}
      </div>
      <Notification />
    </div>
  );
};

export default DashboardPage;