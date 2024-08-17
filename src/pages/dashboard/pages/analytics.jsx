import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Analytics = () => {
  // Sample data for charts
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Pitches Submitted',
        data: [15, 9, 3, 5, 2, 3, 7],
        backgroundColor: '#38BDF8',
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Investors Interested',
        data: [6, 10, 5, 2, 20, 15, 12],
        borderColor: '#4ADE80',
        tension: 0.4,
      },
    ],
  };

  const doughnutData = {
    labels: ['Tech', 'Health', 'Energy', 'Finance'],
    datasets: [
      {
        label: 'Pitches by Category',
        data: [35, 25, 20, 20],
        backgroundColor: ['#F87171', '#34D399', '#FBBF24', '#60A5FA'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Analytics Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Pitches Submitted</h3>
          <Bar data={barData} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Investors Interested</h3>
          <Line data={lineData} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Pitches by Category</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Investment Trends</h3>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default Analytics;
