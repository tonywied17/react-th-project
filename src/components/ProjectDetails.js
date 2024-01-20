import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id.toString() === projectId);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{project.name}</h3>
      <p><strong>Location:</strong> {project.location}</p>
      <p><strong>Type:</strong> {project.type}</p>
      <p><strong>Description:</strong> {project.description}</p>
      <div>
        <strong>Images:</strong>
        <ul>
          {project.images.map((image, index) => (
            <li key={index}>{image}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Manufacturers:</strong>
        <ul>
          {project.manufacturers.map((manufacturer, index) => (
            <li key={index}>{manufacturer}</li>
          ))}
        </ul>
      </div>
      <Link to="../">Go Back</Link>
    </div>
  );
};

export default ProjectDetails;
