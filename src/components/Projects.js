import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({ project }) => (
  <div className="bg-[#b8b2a8] text-[#47494a] shadow-md p-3 scale-center border-l-4 border-[#344658]">
    <h3 className='text-lg font-semibold'>{project.name}</h3>
    <p>{project.description}</p>
    <img
      src={`/images/${project.images[0]}`}
      alt={`${project.name} Thumbnail`}
    />
    <div className='w-full text-right'>
      <Link to={`${project.id}`}>Read More</Link>
    </div>
  </div>
);

const ProjectGrid = ({ projects }) => (
  <div className="grid md:grid-cols-2 gap-4 m-2">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/dev/react-th/projects.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container mx-auto'>
      <h2>Projects</h2>
      <Routes>
        <Route path="/" element={<ProjectGrid projects={projects} />} />
        <Route path="/:projectId" element={<ProjectDetails projects={projects} />} />
      </Routes>
    </div>
  );
};

export default Projects;
