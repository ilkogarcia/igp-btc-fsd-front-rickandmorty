// Import createBrowserRouter from React Router Library
import { createBrowserRouter } from "react-router-dom";

// Import app specific components
import { Home } from "../layout/Home";
import { Singin } from "../layout/Singin";
import { Signup } from "../layout/Signup";
import { Aboutus } from "../layout/Aboutus";

// Define and export app routes
export const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/signin',
      element: <Singin />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/aboutus',
      element: <Aboutus />,
    }
  ]);
