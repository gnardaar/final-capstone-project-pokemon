import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Suspense>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </Suspense>
  </React.StrictMode>
);
