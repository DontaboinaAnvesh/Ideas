import React from 'react';
import { useIdeas } from '../../contexts/IdeasContext';
import './IdeasGallery.css';

const IdeasGallery = () => {
  const { ideas } = useIdeas();

  return (
    <div className="ideas-gallery">
      <div className="ideas-list">
        {ideas.map((idea, index) => (
          <div key={index} className="idea-box animate-slideInFromBottom">
            <h2 className="idea-title">{idea.title}</h2>
            <p className="idea-name">Submitted by: {idea.name}</p>
            <p className="idea-address">Address: {idea.address}</p>
            <p className="idea-city">City: {idea.city}</p>
            <p className="idea-state">State: {idea.state}</p>
            <p className="idea-area">Area: {idea.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeasGallery;
