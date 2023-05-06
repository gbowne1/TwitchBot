import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import CommandListPage from "../pages/CommandListPage";
import CommandUsagePage from "../pages/CommandUsagePage";
import SettingsPage from "../pages/SettingsPage";
import AboutPage from "../pages/AboutPage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/commands" component={CommandListPage} />
        <Route
          exact
          path="/commands/:commandName"
          component={CommandUsagePage}
        />
        <Route exact path="/settings" component={SettingsPage} />
        <Route exact path="/about" component={AboutPage} />
      </div>
    </Router>
  );
}

export default App;
