import React, { createContext, useState, useContext } from 'react';

const QuestionContext = createContext();

export const useQuestionContext = () => {
  return useContext(QuestionContext);
};

export const QuestionProvider = ({ children }) => {
    const [duration, setDuration] = useState({
        start: null,
        end: null,
      });

  return (
    <QuestionContext.Provider value={{ duration, setDuration }}>
      {children}
    </QuestionContext.Provider>
  );
};
