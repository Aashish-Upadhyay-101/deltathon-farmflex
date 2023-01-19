import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./StateManagement/Context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
