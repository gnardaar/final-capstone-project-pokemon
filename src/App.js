import React from 'react'
import {Navbar} from './Components/Navbar';
import {Main} from'./Components/Main'
import {Contact} from'./Components/Contact'
import { useState } from "react";
import   './Components/styles.scss'
import { Route,Routes } from "react-router-dom";
import AboutMe from './Components/AboutMe';

export default function App() {
  const [users, setUsers] = useState({
    const users : setUsers({

    })
  })
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Main/>}/>


        <Route path='/pokemon' element={<Main/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/contact' element={<Contact/>}/>



      </Routes>
      {/* <Main/> */}
    </div>
  )
}
