import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const Main = () => {
  const words = ['Adobe', 'UnitedHealth Group', 'Startups', 'Trading Academy'];
  const colors = ['#FF0000', '#0071C5', '#FF4500', '#32CD32']; // Corresponding colors for the words
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    // Type out the letters one by one
    if (letterIndex < words[currentWordIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[currentWordIndex][letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Wait a bit after finishing the word, then move to the next word
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setLetterIndex(0);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, currentWordIndex]);

  // Split the displayed text into individual letters with color
  const getColoredText = () => {
    return displayedText.split('').map((letter, index) => (
      <span key={index} style={{ color: colors[currentWordIndex] }}>
        {letter}
      </span>
    ));
  };

  return (
    <div id="home" className="w-full h-screen bg-white flex justify-center items-center text-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Left Section - Description and Social Links */}
        <div className="flex flex-col justify-center items-start text-left">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            Hi, I'm <span className="text-gray-900">Aryan</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-700 mt-4 sm:mt-0 mb-6">
            I've worked @: <span>{getColoredText()}</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
          I’m currently pursuing a Computer Science degree at the University of Minnesota and previously interned as a Software Engineer at Adobe, where I contributed to the Commerce Engineering team.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            I've built full-stack web apps, completed projects in AI/ML & FinTech, and open source projects!
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aryan-padmanabhan/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 text-2xl hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/AryanPadmanabhan"
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 text-2xl hover:text-blue-500 transition-colors duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex justify-center">
          <img
            src="/assets/profile_picture.jpg"
            alt="Aryan's Profile Picture"
            className="w-72 h-72 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
