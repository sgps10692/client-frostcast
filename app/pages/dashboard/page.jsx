'use client'
import React from 'react';
import DashboardMenu from '../../components/dashboard/DashboardMenu';

const DashboardPage = () => {
  return (
    <div className="flex">
      <DashboardMenu />
      <main className="flex-grow">
        <h1 className="text-2xl font-bold">Bienvenido al Dashboard</h1>
      </main>
    </div>
  );
};

export default DashboardPage;