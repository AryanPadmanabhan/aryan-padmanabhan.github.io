import React from 'react';
import Image from 'next/image';
import stocks from '../public/assets/stocks.png';
import ml from '../public/assets/ml.png';
import portOpt from '../public/assets/portOp.png';
import code from '../public/assets/code.png';
import sys from '../public/assets/sys.png';
import bb from '../public/assets/bb.png';
import drone from '../public/assets/drone.png';
import pydoc from '../public/assets/pydoc.png';
import scriptify from '../public/assets/scriptify.png';
import luup from '../public/assets/luup.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Luup',
      shortDescription: 'professional networking SaaS platform',
      fullDescription: `
        LinkedIn Premium is too expensive for students so we made an alternative that can find anyone's email address, track networking, provide professionals to connect with, etc.
      `,
      image: luup,
    },
    {
      title: 'Signol',
      shortDescription: 'financial data provider (~1.2k users)',
      fullDescription: `
        Signol is a system designed to provide financial data. It consists of algorithms for locating prime opportunities, data on liquidity, relative volume, and other derivative data.
      `,
      image: stocks,
    },
    {
      title: 'Drone Simulation',
      shortDescription: 'modular simulation engine for autonomous drones',
      fullDescription: `
        Simulation engine in C++ with real-time autonomous drone operations.
        Implemented A* and Dijkstra's algorithms for dynamic pathfinding and motion algorithms.
      `,
      image: drone,
    },
    {
      title: 'PyDoc',
      shortDescription: 'open-source library for interacting with PDFs',
      fullDescription: `
        Developed an open-source Python module for document analysis and computer vision processes. 
      `,
      image: pydoc,
    },
    {
      title: 'Scriptify',
      shortDescription: 'my first full-stack',
      fullDescription: `
        Web application to convert handwritten code from images into executable code. Using Next.js frontend integrated with Firebase database for storage. 
      `,
      image: scriptify,
    },
    {
      title: 'Portfolio Optimization',
      shortDescription: 'tool to optimize portfolios',
      fullDescription: `
        Led the development of a Python-based software tool to enable data-driven investment decisions by achieving significant improvements 
        in portfolio performance with algorithms for covariance matrix estimation and risk-return analysis.
      `,
      image: portOpt,
    },
    {
      title: 'Best Buy Curbside Pickup',
      shortDescription: 'consulting project for Best Buy',
      fullDescription: `
        Developed a curbside pickup web application for Best Buy using Python and HTML, including features such as a QR code generator/scanner. 
        Used SQL to manage consumer and product data. Demonstrated PoC to higher-ups at Best Buy.
      `,
      image: bb,
    },
    {
      title: 'LLM Powered Q&A',
      shortDescription: 'retrieval augmented generation',
      fullDescription: `
        Trained a Transformer-based Q&A Large Learning Model (LLM) with datasets for information extraction.
      `,
      image: ml,
    },
    {
      title: 'SYS Trading Strategy',
      shortDescription: 'successful strategy but edge-eroded',
      fullDescription: `
        Sourced & sorted OHLC data in Python and calculated risk-adjusted returns. Conducted A/B testing on various technical strategies 
        to improve success rates and curated a strategy with a 69% success rate across various market ETFs.
      `,
      image: sys,
    },
    {
      title: 'Portfolio Website',
      shortDescription: 'this website',
      fullDescription: `
        Created a portfolio website to showcase my career as a Computer Science student. Used JavaScript, HTML, Tailwind CSS, and Next.js (React).
      `,
      image: code,
    },
  ];

  return (
    <div id="projects" className="w-full bg-white py-16">
      <h3 className="text-center text-gray-800 text-4xl mb-10 tracking-widest uppercase">Projects</h3>
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            {/* Left: Project Image */}
            {project.image && (
              <div className="flex-shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.title} Project Image`}
                  className="h-48 w-48 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                />
              </div>
            )}

            {/* Right: Text Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <h4 className="text-2xl font-semibold text-gray-800">{project.title}</h4>
              <p className="text-gray-500 italic">{project.shortDescription}</p>
              <p className="text-gray-600">{project.fullDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
