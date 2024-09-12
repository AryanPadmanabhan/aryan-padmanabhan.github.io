import React from 'react';

export const Experience = () => {
  const experiences = [
    {
      company: 'Adobe',
      logo: 'https://static.cdnlogo.com/logos/a/90/adobe.png', // Replace with transparent background logo URL
      title: 'Software Engineer Intern',
      period: 'Summer 2024',
      description: `
        Commerce Engineering Team! Worked on pipelines for data integrity.
      `,
      skills: ['Apache Spark', 'Kafka', 'Databricks', 'Azure ADLS', 'AWS S3'],
    },
    {
      company: 'United Health Group',
      logo: 'https://1000logos.net/wp-content/uploads/2018/02/unitedhealthcare-emblem.png', // Ensure transparent logo
      title: 'Software Engineer Intern',
      period: 'Summer 2023',
      description: `
        Image Processing Team! Built models for document indexing. 
      `,
      skills: ['Python', 'MiniLang', 'Pandas', 'NumPy', 'PyTorch', 'LLM', 'Neural Network', 'Machine Learning'],
    },
    {
      company: 'Uptrends.ai',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSWq83pFzQReDmcP8_i7VZVFwWPnVgCC4Tw&s', // Ensure transparent logo
      title: 'Algorithm Consulting',
      period: 'Fall 2023',
      description: `
        NLP news sentiment with profitability in the equity markets. 
      `,
      skills: ['Python', 'AI/ML', 'Pandas'],
    },
    {
      company: 'FuzeMee',
      logo: 'https://framerusercontent.com/images/tJu1B0jnoi7nFGROxaF6i9c.png', // Ensure transparent logo
      title: 'UI/UX Data Analyst Intern',
      period: 'Fall 2022',
      description: `
      Front-end user experience. 
      `,
      skills: ['Python', 'Pandas'],
    },
    {
      company: 'Trading Academy',
      logo: 'https://play-lh.googleusercontent.com/CL1GPQgLPLLBS5doPAUIXXnc96ZNzKEcXfhkG3ooh1zLve6C4YY05BMApGgy5HVlISw', // Ensure transparent logo
      title: 'Business Dev Trading Intern',
      period: 'Summer 2022',
      description: `
        Backtested patented concepts.
      `,
      skills: ['Python', 'Pandas', 'Statistics', 'MatPlot', 'NumPy', 'Graphing'],
    },
  ];

  return (
    <div id="experience" className="w-full bg-white py-16">
      <h3 className="text-center text-gray-800 text-4xl mb-10 tracking-widest uppercase">Experience</h3>
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0">
              <img
                src={experience.logo}
                alt={`${experience.company} Logo`}
                className="h-16 w-16 object-contain" // Remove any background classes
              />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-semibold text-gray-800">{experience.company}</h4>
              <p className="text-gray-600 text-lg">{experience.title} | {experience.period}</p>
              <p className="text-gray-700 mt-2">{experience.description}</p>
              <div className="flex flex-wrap mt-3">
                {experience.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-gray-200 text-gray-600 text-sm rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
