import React, { ReactNode, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(true); 

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    return (
        <Box>
            <Box sx={{
                marginTop:'50px',
            }}>
                {children}
            </Box>
        </Box>
        
    );
};

export default Layout;