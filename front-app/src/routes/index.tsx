import { BrowserRouter as Router, Route, 
  Routes } from 'react-router-dom';
import DashboardLayout from '../modules/dashborad/dashboard-layout';
import ClientePage from '../modules/cliente/pages/cliente';
import NotFoundPage from '../modules/@core/pages/NotFoundPage';
import { QueryClient,QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function CustonRouters() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />} />
          <Route path="/cliente" element={<ClientePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
    
  )
}

export default CustonRouters;
