import React from 'react';
import Welcome from '@/Components/Welcome';
import MainLayout from '@/Layouts/MainLayout';

export default function Dashboard() {
  return (
    <MainLayout
      title="Dashboard"
    >
      <div className="">
        <div className="">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
            <Welcome />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
