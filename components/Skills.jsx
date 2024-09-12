import React from 'react';

const Skills = () => {
  const skills = [
    'Python',
    'Java',
    'C',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'OCaml',
    'PyTorch',
    'Pinecone',
  ];

  return (
    <div id="skills" className="w-full bg-gray-900 py-16">
      <h3 className="text-center text-white text-4xl mb-10 tracking-widest uppercase">Skills</h3>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300 ease-in-out"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
