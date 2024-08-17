import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Briefcase, CheckCircle, Clock, PieChart as PieChartIcon } from 'lucide-react';

// Data for the pie chart
const data = [
  { name: 'Investors', value: 45 },
  { name: 'Entrepreneurs', value: 20 },
  { name: 'General Public', value: 35 },
];

// Colors for the pie chart segments
const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const Overview = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
      <div className="container mx-auto">
        {/* Introduction Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-8 flex items-center">
          <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center">
            <Briefcase size={32} />
          </div>
          <div className="ml-6">
            <h2 className="text-4xl font-extrabold text-gray-800">Welcome, Eunice</h2>
            <p className="text-gray-600 mt-2">Here's an overview of your entrepreneurial journey.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <div className="flex items-center mb-4">
              <CheckCircle size={24} className="text-green-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-700">Total Pitches</h3>
            </div>
            <p className="text-4xl font-extrabold text-green-600">12</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8">
            <div className="flex items-center mb-4">
              <CheckCircle size={24} className="text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-700">Successful Pitches</h3>
            </div>
            <p className="text-4xl font-extrabold text-blue-600">8</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8">
            <div className="flex items-center mb-4">
              <Clock size={24} className="text-yellow-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-700">Pending Pitches</h3>
            </div>
            <p className="text-4xl font-extrabold text-yellow-600">4</p>
          </div>
        </div>

       

        {/* Target Audience Section */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="flex items-center mb-6">
            <PieChartIcon size={24} className="text-purple-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Target Audience</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;
