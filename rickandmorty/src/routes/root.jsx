// Import createBrowserRouter from React Router Library
import { createBrowserRouter } from "react-router-dom";

// Import app specific components
import { Home } from "../layouts/Home";
import { Singin } from "../layouts/Singin";
import { Signup } from "../layouts/Signup";
import { Aboutus } from "../layouts/Aboutus";

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
