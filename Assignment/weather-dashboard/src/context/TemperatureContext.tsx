import React, { createContext, useState, ReactNode, useContext } from 'react';

interface TemperatureContextType {
  unit: 'Celsius' | 'Fahrenheit';
  toggleUnit: () => void;
}

const TemperatureContext = createContext<TemperatureContextType | undefined>(undefined);

export const useTemperature = () => {
  const context = useContext(TemperatureContext);
  if (!context) {
    throw new Error('useTemperature must be used within a TemperatureProvider');
  }
  return context;
};

export const TemperatureProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [unit, setUnit] = useState<'Celsius' | 'Fahrenheit'>('Celsius');

  const toggleUnit = () => {
    setUnit(unit === 'Celsius' ? 'Fahrenheit' : 'Celsius');
  };

  return (
    <TemperatureContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};
