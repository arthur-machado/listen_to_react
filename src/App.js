import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { UserContextProvider } from './hooks/UserContext';
import Routes from './routes';
import './stylesheets/global.css';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </UserContextProvider>
  );
}

export default App;
