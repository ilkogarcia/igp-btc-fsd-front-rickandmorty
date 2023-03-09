// Immports from Reacts
import React from 'react'

// Immports from Reacts Router
import { Route, Routes } from 'react-router-dom'

// Import app pages
import { Home } from "./Home";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { Aboutus } from "./Aboutus";

// Immport app sections
import { Header } from './sections/Header'
import { Footer } from './sections/Footer'

export const MainApp = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/aboutus' element={<Aboutus />} />
      </Routes>
      <Footer />
    </>
  )
}
