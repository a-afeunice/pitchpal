import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pitches = () => {
  const navigate = useNavigate();

  // Example pitches data with video URLs stored locally or fetched from backend
  const pitchesData = [
    {
      id: 1,
      title: 'Introduction to RoboAgri',
      companyName: 'RoboAgri',
      description: 'Automating farming with robotics to increase efficiency...',
      fundingGoal: 300000,
      videoUrl: '/path/to/local/video1.mp4', // Local video URL
    },
    {
      id: 1,
      title: 'Introduction to RoboAgri',
      companyName: 'RoboAgri',
      description: 'Automating farming with robotics to increase efficiency...',
      fundingGoal: 300000,
      videoUrl: '/path/to/local/video1.mp4', // Local video URL
    },
    {
      id: 1,
      title: 'Introduction to RoboAgri',
      companyName: 'RoboAgri',
      description: 'Automating farming with robotics to increase efficiency...',
      fundingGoal: 300000,
      videoUrl: '/path/to/local/video1.mp4', // Local video URL
    },
    {
      id: 1,
      title: 'Introduction to RoboAgri',
      companyName: 'RoboAgri',
      description: 'Automating farming with robotics to increase efficiency...',
      fundingGoal: 300000,
      videoUrl: '/path/to/local/video1.mp4', // Local video URL
    },
    {
      id: 1,
      title: 'Introduction to RoboAgri',
      companyName: 'RoboAgri',
      description: 'Automating farming with robotics to increase efficiency...',
      fundingGoal: 300000,
      videoUrl: '/path/to/local/video1.mp4', // Local video URL
    },
    // Add more pitch objects with unique IDs and local video URLs
  ];

  const handleAddPitch = () => {
    navigate('/dashboard/pitches/add');
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Your Pitches</h1>
        <button
          onClick={handleAddPitch}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm"
        >
          Add Pitch
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pitchesData.map((pitch) => (
          <div key={pitch.id} className="border rounded-lg shadow-sm overflow-hidden">
            <div className="relative pb-1/2">
              <video
                src={pitch.videoUrl}
                controls
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-3 text-sm">
              <h2 className="text-lg font-semibold">{pitch.title}</h2>
              <p className="text-gray-600 text-xs">{pitch.companyName}</p>
              <p className="text-gray-700 text-xs mb-2 truncate">{pitch.description}</p>
              <p className="text-green-600 text-xs font-semibold">Funding Goal: ${pitch.fundingGoal.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pitches;
