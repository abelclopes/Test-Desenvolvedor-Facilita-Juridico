// NavigationTop.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, Divider, List, ListItem, ListItemButton, ListItemText, Button, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';


const drawerWidth = 240;
const navItems = ['Dashboard', 'Clientes'];

interface NavigationTopProps {
  onMenuClick: () => void;
  window?: () => Window;
}

const NavigationTop: React.FC<NavigationTopProps> = ({ onMenuClick, window }) => {
  const container = window !== undefined ? () => window().document.body : undefined
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavigation(`/${item.toLowerCase()}`)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link variant='button' href={`/${item.toLowerCase()}`} key={item} 
              sx={{ 
                color: '#fff', 
                marginLeft: 3,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none',
                  color: 'black' 
                }
              }}>
                {item}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavigationTop;
