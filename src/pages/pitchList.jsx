import React, { useState } from 'react'
import { coin, doc, edu, farm, finance } from '../assets'
import PitchCard from '../components/pitchCard'

const pitches = [
  {
    title: 'EduTrac',
    image: edu,
    status: 'Approved',
    description: 'An application to track the attendance of teachers in real time with their respective courses...'
  },
  {
    title: 'WatchFarm',
    image: farm,
    status: 'Approved',
    description: 'An application to track the attendance of teachers in real time with their respective courses...'
  },
  {
    title: 'SaveKash',
    image: finance,
    status: 'Approved',
    description: 'An application to track the attendance of teachers in real time with their respective courses...'
  },
  {
    title: 'CitCoin',
    image: coin,
    status: 'Approved',
    description: 'An application to track the attendance of teachers in real time with their respective courses...'
  },
  {
    title: 'RoboFarm',
    image: farm,
    status: 'Approved',
    description: 'An application to track the attendance of teachers in real time with their respective courses...'
  },
  {
    title: 'DailDoc',
    image: doc,
    status: 'Approved',
    description: 'An application to track the attendance of teachers in real time with their respective courses...'
  },
]

const PitchList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPitches = selectedCategory === 'All'
    ? pitches
    : pitches.filter(pitch => pitch.category === selectedCategory);
  return (
    <div className="container mx-auto p-4">
    {/* Filter Buttons */}
    <div className="mb-4 flex flex-wrap gap-2">
      {['All', 'FinTech', 'AI', 'EduTech', 'AgriTech', 'CyberTech', 'Block Chain', 'HeaTech'].map(category => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full border ${selectedCategory === category ? 'bg-green-500 text-white' : 'bg-white text-black'}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Pitch Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredPitches.map((pitch, index) => (
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
  )
}

export default PitchList