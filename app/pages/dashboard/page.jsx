'use client'
import React from 'react';
import DashboardMenu from '../../components/dashboard/DashboardMenu';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import Notification from '../../components/dashboard/Notification';
import CardsContainer from '../../components/dashboard/Card';

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <DashboardMenu />
      <div className="flex-grow flex flex-col">
        <DashboardHeader />
        <CardsContainer />
      </div>
      <Notification />
    </div>
  );
};
export default DashboardPage;