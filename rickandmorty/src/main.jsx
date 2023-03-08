// Import React library and virtual DOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import React Router library
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/root'

// Import stylesheet
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { routes }/>
  </React.StrictMode>,
)
