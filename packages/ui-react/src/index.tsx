import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "reflect-metadata";
import { build } from "@fe-clean-architecture/composer";
import { AppContext } from "./app-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const app = build({ baseUrl: "http://base-url" });

root.render(
  <React.StrictMode>
    <AppContext.Provider value={{ app }}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
