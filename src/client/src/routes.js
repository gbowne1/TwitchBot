import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  CommandListPage,
  SettingsPage,
  AboutPage,
  HelpPage,
  LeaderBoardPage,
} from "./pages";

export const routes = [
  { label: "Home", path: "/", element: <HomePage /> },
  { label: "Commands", path: "/commands", element: <CommandListPage /> },
  { label: "Settings", path: "/settings", element: <SettingsPage /> },
  { label: "About", path: "/about", element: <AboutPage /> },
  { label: "Help", path: "/help", element: <HelpPage /> },
  {
    label: "LeaderBoard",
    path: "/leaderboard",
    element: <LeaderBoardPage />,
  },
];

const AppRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
  </Routes>
);

export default AppRoutes;
