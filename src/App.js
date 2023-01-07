import React from "react";
import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Contact } from "./Components/Contact";
import AboutMe from "./Components/AboutMe";
import Users from "./Components/Users";

import "./Components/styles.scss";
import { Route, Routes } from "react-router-dom";

export default function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}

        <Route path='/pokemon' element={<Main/>}/>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />

        
      </Routes>
    </div>
  );
}
