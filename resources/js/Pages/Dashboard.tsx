import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Clock from '@/Components/Common/Clock';
import { FaDollarSign, FaHandHoldingDollar, FaSpinner } from 'react-icons/fa6';
import DashboardLineChart from '@/Components/Common/DashboardLineChart';
import DashboardBarcharts from '@/Components/Common/DashboardBarcharts';
import DashboardPieChart from '@/Components/Common/DashboardPiechart';
import { FaFileAlt } from 'react-icons/fa';
import Loader from '@/Components/Common/Loader';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);

  const metrices = [
    {label: 'Number of Active Policies', value: '1,520', icon: <FaFileAlt className='text-7xl text-gray-200' />, className: 'bg-[#001F3F] p-7 rounded shadow flex flex-row items-center gap-3 cursor-pointer hover:opacity-80'},
    {label: 'Claims in Process', value: '34', icon: <FaSpinner className='text-7xl text-gray-200' />, className: 'bg-[#3A6D8C] p-3 rounded shadow flex flex-row items-center gap-3 cursor-pointer hover:opacity-80'},
    {label: 'Monthly Premium collected', value: '$150,000', icon: <FaDollarSign className='text-7xl text-gray-200' />, className: 'bg-green-600 p-3 rounded shadow flex flex-row items-center gap-3 cursor-pointer hover:opacity-80'},
    {label: 'Approved Claim Amounts', value: '$50,000', icon: <FaHandHoldingDollar className='text-7xl text-gray-200' />, className: 'bg-[#697565] p-3 rounded shadow flex flex-row items-center gap-3 cursor-pointer hover:opacity-80'}
  ];

  return (
    <MainLayout
      title="Dashboard"
    >
      <h4 className='text-xl'>Welcome to Health Insurance</h4>
      <Clock />

      {!loading ? (
        <>
          <div className='mt-3 grid grid-cols-1 md:grid-cols-4 gap-3'>
            {metrices.map((item:any, index:number) => (
              <div className={item.className} key={index}>
                {item.icon}
                <div>
                  <p className='font-semibold text-gray-200'>{item.label}</p>
                  <h4 className='text-3xl mt-3'>{item.value}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-12 mt-4 gap-3'>
            <div className='col-span-12 md:col-span-8 gap-3'>
              <h4 className='text-xl mt-4 mb-2'>Overview</h4>

              <div className='grid md:grid-cols-2 gap-3'>
                <div className='bg-white dark:bg-gray-800 rounded p-3'>
                  <DashboardLineChart />
                </div>

                <div className='bg-white dark:bg-gray-800 rounded p-3'>
                  <DashboardBarcharts />
                </div>
              </div>

              <div className='bg-white dark:bg-gray-800 rounded p-3 mt-3'>
                <DashboardPieChart />
              </div>
            </div>

            <div className='col-span-12 md:col-span-4'>
              <h4 className='text-xl mt-4 mb-2'>Recent Activity</h4>
              <div className='bg-white dark:bg-gray-800 rounded p-3'>
                <p className='m-3 text-center'>No Activity</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='flex items-center justify-center h-[70vh]'>
          <Loader color="white" width={50} />
        </div>
      )}
    </MainLayout>
  );
}
