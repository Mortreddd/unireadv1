import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
