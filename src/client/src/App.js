import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import AppBarComponent from "./components/AppBar";
import HomePage from "./pages/HomePage.js";
import CommandListPage from "./pages/CommandListPage";
import CommandUsagePage from "./pages/CommandUsagePage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import "./App.css";
import LeaderBoard from "./pages/LeaderBoardPage.js";

function App() {
  return (
	<div className="App">
      <AppBarComponent />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/commands" element={<CommandListPage />} />
          <Route path="/commands/:commandName" element={<CommandUsagePage />} />
          <Route path="/settings" element={<SettingsPage />} />
		  <Route path="/about" element={<AboutPage />} />
		  <Route path="/help" element={<HelpPage />} />
		  <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
