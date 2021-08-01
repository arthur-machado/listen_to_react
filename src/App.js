import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { UserContextProvider } from './hooks/UserContext';
import Routes from './routes';
import './stylesheets/global.css';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <Routes />
      </UserContextProvider>
    </div>
  );
}

export default App;
