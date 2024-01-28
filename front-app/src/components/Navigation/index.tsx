// App.tsx
import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import NavigationTop from 'components/NavigationTop';

const Navigation: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(true); 

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

  return (
    <Box>
        <NavigationTop onMenuClick={toggleDrawer} />
    </Box>
  );
};

export default Navigation;
