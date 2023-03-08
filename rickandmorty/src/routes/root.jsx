// Import createBrowserRouter from React Router Library
import { createBrowserRouter } from "react-router-dom";

// Import app specific components
import { Home } from "../layout/Home";
import { Singin } from "../layout/Singin";

// Define and export app routes
export const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/signin',
      element: <Singin />,
    }
  ]);
