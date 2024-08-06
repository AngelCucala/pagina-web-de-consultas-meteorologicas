import React, { createContext, useContext, useState } from 'react';

const OptionContext = createContext();

export const useOption = () => {
  return useContext(OptionContext);
};

export const OptionProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <OptionContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </OptionContext.Provider>
  );
};
