import React from 'react';
import { Typography, Grid, Paper, Container, Box } from '@mui/material';

const DashboardLayout: React.FC = () => {
  return (
    <Box sx={{ minWidth: '100%' }}>
      <Box>
      <Typography variant="h4">
        Dashboard
      </Typography>

        <Typography variant="h6" gutterBottom>
          Informações do Dashboard
        </Typography>
        <Grid container spacing={3}>
         
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
