// src/contexts/IdeasContext.js
import React, { createContext, useState, useContext } from 'react';

const IdeasContext = createContext();

export const IdeasProvider = ({ children }) => {
  const [ideas, setIdeas] = useState([]);

  const addIdea = (idea) => {
    setIdeas((prevIdeas) => [...prevIdeas, idea]);
  };

  return (
    <IdeasContext.Provider value={{ ideas, addIdea }}>
      {children}
    </IdeasContext.Provider>
  );
};

export const useIdeas = () => useContext(IdeasContext);
