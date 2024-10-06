import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTemperature } from '../context/TemperatureContext';

interface WeatherWidgetProps {
  location: string;
  temperatureCelsius: number;
  condition: string;
  onRemove: () => void;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ location, temperatureCelsius, condition, onRemove }) => {
  const { unit } = useTemperature();

  const convertTemperature = (temp: number) => {
    return unit === 'Celsius' ? temp : (temp * 9) / 5 + 32;
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{location}</Typography>
        <Typography variant="body1">
          {convertTemperature(temperatureCelsius)}° {unit}
        </Typography>
        <Typography variant="body2">{condition}</Typography>

        {/* Box to align the weather icon and delete button horizontally */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Render weather icon conditionally */}
          {condition === 'sunny' ? <WbSunnyIcon /> : <CloudIcon />}
          <IconButton onClick={onRemove}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
