import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './features/api/apiSlice';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(   //this is where the app renders
  <React.StrictMode>
    {/* stirictMode, has more rules to fallow for better code */}
      <Suspense>   
        {/* suspense is async opperation by letting you wait for some code */}
    <BrowserRouter>
    <ApiProvider api={apiSlice}>
        <App />
        </ApiProvider>
    </BrowserRouter>
      </Suspense>
  </React.StrictMode>,
);


//this is the start of the application where the routing logic and the API slices are counted the ('root') is from the html in the public folder