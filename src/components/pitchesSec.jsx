// components/PitchesSection.jsx
import React from 'react';
import PitchCard from './pitchCard';
import { energy, health, tech } from '../assets';


const pitchesData = [
  {
    title: 'Innovative Tech Startup',
    description: 'A cutting-edge technology company focusing on AI and machine learning.',
    image: tech,
    status: 'Approved',
    
  },
  {
    title: 'Green Energy Solutions',
    description: 'Sustainable energy solutions for a greener future that will impact...',
    image: energy,
    status: 'Approved',
    
  },
  {
    title: 'HealthTech Innovations',
    description: 'Revolutionizing healthcare with advanced technology for the benefit of...',
    image: health,
    status: 'Approved',
    
  },
  // Add more pitch data here
];

const PitchesSec= () => {
  return (
    <div className="p-6 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Featured Pitches</h2>
        <p className="mt-2 text-gray-600">
          Explore some of the most exciting pitches from startups and entrepreneurs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pitchesData.map((pitch, index) => (
          <PitchCard
          key={index}
          title={pitch.title}
          image={pitch.image}
          status={pitch.status}
          description={pitch.description}
        />
        ))}
      </div>
    </div>
  );
};

export default PitchesSec;
