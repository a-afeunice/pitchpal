import React from 'react';
import { Calendar, DollarSign, RocketIcon, Users } from 'lucide-react';
import { motion } from 'framer-motion'; 


const programs = [
  {
    id: 1,
    name: 'Startup Accelerator Program',
    description: 'A 6-month program providing funding, mentorship, and resources to help startups grow.',
    icon: <RocketIcon className="w-8 h-8 text-blue-500" />
  },
  {
    id: 2,
    name: 'Mentorship Program',
    description: 'Connect with experienced mentors who can guide you through the challenges of building a startup.',
    icon: <Users className="w-8 h-8 text-green-500" />
  },
  {
    id: 3,
    name: 'Pitch Training Workshop',
    description: 'Participate in workshops designed to improve your pitching skills and presentation techniques.',
    icon: <Calendar className="w-8 h-8 text-yellow-500" />
  },
  {
    id: 4,
    name: 'Funding Bootcamp',
    description: 'Learn about various funding options and how to secure investment for your startup.',
    icon: <DollarSign className="w-8 h-8 text-red-500" />
  }
];

const ProgramsSection = () => {
  return (
    <div className="p-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl text-gray-800 font-bold text-center mb-8">Upcoming Programs</h2>
        <div className="space-y-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="flex items-start p-4 bg-white rounded-lg shadow-lg space-x-4"
              initial={{ opacity: 0, y: 50 }}  // Initial state (hidden)
              animate={{ opacity: 1, y: 0 }}    // Animate to this state
              transition={{ duration: 0.5, delay: index * 0.2 }}  // Animation settings
            >
              <div className="flex-shrink-0">
                {program.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
