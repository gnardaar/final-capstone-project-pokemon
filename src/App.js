import React from 'react'
import {Navbar} from './Components/Navbar';
import {Main} from'./Components/Main'
import {Contact} from'./Components/Contact'

import   './Components/styles.css'
import { Route,Routes } from "react-router-dom";
import AboutMe from './Components/AboutMe';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/pokemon' element={<Main/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/contact' element={<Contact/>}/>



      </Routes>
      {/* <Main/> */}
    </div>
  )
}
