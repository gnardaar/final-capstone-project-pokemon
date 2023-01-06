import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './features/api/apiSlice';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Suspense>
    <BrowserRouter>
    <ApiProvider api={apiSlice}>
        <App />
        </ApiProvider>
    </BrowserRouter>
      </Suspense>
  </React.StrictMode>,
);
