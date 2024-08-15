// Resources.js
import React from 'react';

const resources = [
  {
    id: 1,
    title: 'Business Plan Guide',
    description: 'A comprehensive guide to creating a winning business plan.',
    link: 'https://www.forbes.com/advisor/business/how-to-write-a-business-plan/',
     youtubeLink: 'https://www.youtube.com/watch?v=ZEMbKzy7FD8',
    thumbnailUrl: 'https://img.youtube.com/vi/ZEMbKzy7FD8/hqdefault.jpg'
  },
  {
    id: 2,
    title: 'Pitch Deck Templates',
    description: 'Downloadable pitch deck templates to help you create your presentation.',
    link: 'https://www.canva.com/presentations/templates/pitch-deck/',
     youtubeLink: 'https://www.youtube.com/watch?v=jDPsZM82hC0',
    thumbnailUrl: 'https://img.youtube.com/vi/jDPsZM82hC0/hqdefault.jpg'
  },
  {
    id: 3,
    title: 'Funding Options',
    description: 'An overview of various funding options available for startups.',
    link: 'https://www.startups.com/library/expert-advice/5-types-startup-funding',
     youtubeLink: 'https://www.youtube.com/watch?v=4RAs9Y5wwDo',
    thumbnailUrl: 'https://img.youtube.com/vi/4RAs9Y5wwDo/hqdefault.jpg'
  },
  {
    id: 4,
    title: 'Market Research Tools',
    description: 'Tools to help you conduct market research and validate your business idea.',
    link: 'https://www.meltwater.com/en/blog/market-research-tools',
     youtubeLink: 'https://www.youtube.com/watch?v=VTPnXfYcaXI',
    thumbnailUrl: 'https://img.youtube.com/vi/VTPnXfYcaXI/hqdefault.jpg'
  }
];

const Resources = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {resource.youtubeLink && (
              <a
                href={resource.youtubeLink}
                className="block mb-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={resource.thumbnailUrl}
                  alt={resource.title}
                  className="w-full h-auto rounded-lg"
                />
              </a>
            )}
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            <a
              href={resource.link}
              className="text-green-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
