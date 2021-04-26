import React from "react";
import Navbar from "./components/Navbar/Navbar";

import Routes from "./routes";
import "./stylesheets/global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
