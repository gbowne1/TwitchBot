import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  CommandListPage,
  CommandUsagePage,
  SettingsPage,
  AboutPage,
  HelpPage,
  LeaderBoardPage,
} from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";

export const routes = [
  {
    label: "Home",
    path: "/",
    element: <HomePage />,
    inNav: true,
  },
  {
    label: "Commands",
    path: "/commands",
    element: <CommandListPage />,
    inNav: true,
    protected: true,
  },
  {
    label: "Command Usage",
    path: "/commands/:commandName",
    element: <CommandUsagePage />,
    inNav: false,
    protected: true,
  },
  {
    label: "Settings",
    path: "/settings",
    element: <SettingsPage />,
    inNav: true,
    protected: true,
  },
  {
    label: "About",
    path: "/about",
    element: <AboutPage />,
    inNav: true,
    protected: true,
  },
  {
    label: "Help",
    path: "/help",
    element: <HelpPage />,
    inNav: true,
    protected: true,
  },
  {
    label: "LeaderBoard",
    path: "/leaderboard",
    element: <LeaderBoardPage />,
    inNav: true,
    protected: true,
  },
];
const AppRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={
          route.protected ? (
            <ProtectedRoute>{route.element}</ProtectedRoute>
          ) : (
            route.element
          )
        }
      />
    ))}
  </Routes>
);

export default AppRoutes;
