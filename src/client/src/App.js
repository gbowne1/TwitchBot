import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppBarComponent from "./components/AppBar";
import AppRoutes from "./routes";
import "./App.css";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <AppBarComponent />
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
