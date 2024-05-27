import { RouteProps } from "react-router-dom";
import HomePage from "./Pages/HomePage.tsx";

export const AppRoutes: Array<RouteProps> = [
  {
    path: "/",
    element: <HomePage />,
  },
];
