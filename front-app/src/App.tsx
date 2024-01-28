import React from 'react';
import './App.css';
import CustomRouters from './routes';
import Layout from './components/Layout'; // Import the Layout component

const App: React.FC = () => {
  return (  
      <CustomRouters />
  );
}

export default App;
