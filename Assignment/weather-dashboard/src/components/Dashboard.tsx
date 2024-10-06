import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import WeatherWidget from './WeatherWidget';
import axios from 'axios';


interface WidgetData {
  id: string;
  location: string;
  temperatureCelsius: number;
  condition: string;
}

const initialWidgets: WidgetData[] = [
  { id: '1', location: 'New York', temperatureCelsius: 25, condition: 'sunny' }
];

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<WidgetData[]>(() => {
    const savedWidgets = localStorage.getItem('widgets');
    return savedWidgets ? JSON.parse(savedWidgets) : initialWidgets;
  });

  useEffect(() => {
    localStorage.setItem('widgets', JSON.stringify(widgets));
  }, [widgets]);

  const addWidget = () => {
    const newWidget: WidgetData = {
      id: Date.now().toString(),
      location: 'Noida',
      temperatureCelsius: 36,
      condition: 'cloudy'
    };
    setWidgets((prev) => [...prev, newWidget]);
  };

  const removeWidget = (id: string) => {
    setWidgets((prev) => prev.filter((widget) => widget.id !== id));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <Button variant="contained" onClick={addWidget} style={{ marginBottom: '20px' }}>
        Add Widget
      </Button>

      <Grid container spacing={2} justifyContent="center">
        {widgets.map((widget) => (
          <Grid item xs={12} sm={6} md={4} key={widget.id}>
            <WeatherWidget
              location={widget.location}
              temperatureCelsius={widget.temperatureCelsius}
              condition={widget.condition}
              onRemove={() => removeWidget(widget.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
