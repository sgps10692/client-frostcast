'use client'
import React from 'react';
import DashboardMenu from '../../components/dashboard/DashboardMenu';
import DashboardHeader from '../../components/dashboard/DashboardHeader';

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <DashboardMenu />
      <DashboardHeader />
      </div>
  );
};
export default DashboardPage;