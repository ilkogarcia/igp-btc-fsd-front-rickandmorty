// Import createBrowserRouter from React Router Library
import { createBrowserRouter } from "react-router-dom";

// Import app specific components
import { Characters } from "../layout/Characters";
import { Singin } from "../layout/Singin";

// Define and export app routes
export const routes = createBrowserRouter([
    {
      path: '/',
      element: <h1>Welcome to The Rick And Morty API Frontend</h1>,
    },
    {
      path: '/signin',
      element: <Singin />,
    },
    {
      path: '/characters',
      element: <Characters />,
    },  
  ]);
