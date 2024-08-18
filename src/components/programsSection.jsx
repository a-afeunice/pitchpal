import React, { useRef } from 'react';
import { Calendar, DollarSign, RocketIcon, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const programs = [
  {
    id: 1,
    name: 'Startup Accelerator Program',
    description: 'A 6-month program providing funding, mentorship, and resources to help startups grow.',
    icon: <RocketIcon className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    name: 'Mentorship Program',
    description: 'Connect with experienced mentors who can guide you through the challenges of building a startup.',
    icon: <Users className="w-8 h-8 text-green-500" />,
  },
  {
    id: 3,
    name: 'Pitch Training Workshop',
    description: 'Participate in workshops designed to improve your pitching skills and presentation techniques.',
    icon: <Calendar className="w-8 h-8 text-yellow-500" />,
  },
  {
    id: 4,
    name: 'Funding Bootcamp',
    description: 'Learn about various funding options and how to secure investment for your startup.',
    icon: <DollarSign className="w-8 h-8 text-red-500" />,
  },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl text-gray-800 font-bold text-center mb-12">Upcoming Programs</h2>
        <div className="flex justify-between space-x-8" ref={ref}>
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate if in view
              transition={{ duration: 0.5, delay: index * 0.2 }} 
            >
              <div className="flex-shrink-0 mb-4">
                {program.icon}
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
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
