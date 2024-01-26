import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Exemplo de painel com Paper */}
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h6" gutterBottom>
          Informações do Dashboard
        </Typography>
        <Grid container spacing={3}>
         
        </Grid>
      </Paper>
    </div>
  );
};

export default DashboardLayout;
