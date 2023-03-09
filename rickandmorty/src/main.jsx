// Import React library
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import other librarys
import { BrowserRouter } from "react-router-dom";
import WebFont from 'webfontloader'

// Imports App layouts and components
import { MainApp } from './layouts/MainApp'

// Import App stylesheet
import './index.css'

WebFont.load({
  google: {
    families: ['Droid Sans', 'Creepster']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>,
)