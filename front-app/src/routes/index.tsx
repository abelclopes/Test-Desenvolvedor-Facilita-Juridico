import { BrowserRouter as Router, Route, 
  Routes } from 'react-router-dom';
import DashboardLayout from '../modules/dashborad/dashboard-layout';
import ClientePage from '../modules/cliente/pages/cliente';
import NotFoundPage from '../modules/@core/pages/NotFoundPage';
import { QueryClient,QueryClientProvider } from 'react-query';
import { Box } from '@mui/material';
import Navigation from 'components/Navigation';
const queryClient = new QueryClient();

function CustonRouters() {
  return (
    <Box sx={{ minWidth: '100%' }}>
      <QueryClientProvider client={queryClient}>
        <Router>
            <Navigation />
          <Routes>            
            <Route path="/" element={<DashboardLayout />} />
            <Route path="/dashboard" element={<DashboardLayout />} />       
            <Route path="/clientes" element={<ClientePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Box>
  )
}

export default CustonRouters;
