import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppBarComponent from "./components/AppBar";
import AppRoutes from "./routes";
import "./App.css";
import ThemeProvider from "./context/themeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <div className="App">
            <AppBarComponent />
            <AppRoutes />
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
