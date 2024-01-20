import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({ project }) => (
  <div className="bg-[#333d37] text-neutral-200 rounded-md shadow-md p-3">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <img
      src={`/images/${project.images[0]}`}
      alt={`${project.name} Thumbnail`}
    />
    <Link to={`${project.id}`}>Read More</Link>
  </div>
);

const ProjectGrid = ({ projects }) => (
  <div className="grid grid-cols-2 gap-4 m-2">
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
        const response = await fetch('/projects.json');
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
