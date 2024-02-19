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
  },
  {
    label: "Command Usage",
    path: "/commands/:commandName",
    element: <CommandUsagePage />,
    inNav: false,
  },
  {
    label: "Settings",
    path: "/settings",
    element: <SettingsPage />,
    inNav: true,
  },
  {
    label: "About",
    path: "/about",
    element: <AboutPage />,
    inNav: true,
  },
  {
    label: "Help",
    path: "/help",
    element: <HelpPage />,
    inNav: true,
  },
  {
    label: "LeaderBoard",
    path: "/leaderboard",
    element: <LeaderBoardPage />,
    inNav: true,
  },
];

const AppRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element}></Route>
    ))}
  </Routes>
);

export default AppRoutes;
