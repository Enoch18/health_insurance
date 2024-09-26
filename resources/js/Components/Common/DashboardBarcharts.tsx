import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const DashboardBarcharts = () => {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Approved', 'Pending', 'Rejected'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
  );
}

export default DashboardBarcharts;