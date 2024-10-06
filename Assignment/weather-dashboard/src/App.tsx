import React from 'react';
import { TemperatureProvider } from './context/TemperatureContext';
import Dashboard from './components/Dashboard';
import { Button, Grid } from '@mui/material';
import { useTemperature } from './context/TemperatureContext';

const TemperatureToggleButton: React.FC = () => {
  const { unit, toggleUnit } = useTemperature();

  return (
    <Grid container justifyContent="center">
    <Button variant="contained" onClick={toggleUnit}>
      Switch to {unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'}
    </Button>
    </Grid>
  );
};

const App: React.FC = () => {
  return (
    <TemperatureProvider>
      <div>
        <TemperatureToggleButton />
        <Dashboard />
      </div>
    </TemperatureProvider>
  );
};

export default App;
