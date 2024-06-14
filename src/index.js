// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Find the root element in the HTML
const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render the app to the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
