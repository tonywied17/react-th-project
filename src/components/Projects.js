import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const randomImageId = Math.floor(Math.random() * 1000);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Card className="mt-6 w-full bg-[#b8b2a8] relative scale-center">
      <CardHeader className="h-56 bg-[#344658] text-[#b8b2a8] relative">
        {!imageLoaded && (
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        )}
        <img
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? 'block' : 'none' }}
          src={`https://picsum.photos/800/400?random=${randomImageId}`}
          alt={`${project.name} Thumbnail`}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {project.name}
        </Typography>
        <Typography>
          {project.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`${project.id}`}>
          <Button className='bg-[#344658] text-[#b8b2a8]'>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

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
        const response = await fetch('/new-react-site/projects.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container mx-auto fade-center lg:px-7'>
      <h2 class="md:text-4xl text-2xl font-extrabold text-[#313233] my-5">Recent Projects</h2>
      <p class="mt-4 mb-8 md:text-lg text-base text-[#47494a]">Explore our latest remodel projects showcasing innovative designs and transformations.</p>
      <Routes>
        <Route path="/" element={<ProjectGrid projects={projects} />} />
        <Route path="/:projectId" element={<ProjectDetails projects={projects} />} />
      </Routes>
    </div>
  );
};

export default Projects;
