// Import React library and virtual DOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import stylesheet
import './index.css'

// Import React Router library
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/root'

import WebFont from 'webfontloader'
WebFont.load({
  google: {
    families: ['Droid Sans', 'Creepster']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { routes }/>
  </React.StrictMode>,
)
