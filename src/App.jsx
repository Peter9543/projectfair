import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'




function App() {
 

  return (
    <>
    
     {/* <Route element={<Header/>} /> */}
     <Routes>
     
      <Route element={<Home/>} path='/'/>
      <Route element={<Auth/>} path='/login'/>
      <Route element={<Auth  insideRegister={true}/>} path='/register'/>

      <Route element={<Dashboard/>} path='/dashboard'/>
      <Route element={<Project/>} path='/project'/>
     </Routes>
    <Footer/>
    </>
  )
}

export default App
