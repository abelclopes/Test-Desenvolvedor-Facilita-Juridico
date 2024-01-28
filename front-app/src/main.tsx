import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@mui/material/styles';
import Layout from 'components/Layout';
import Navigation from 'components/Navigation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>   
      <App />
    </Layout>   
  </React.StrictMode>,
)
