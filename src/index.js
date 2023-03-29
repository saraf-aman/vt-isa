import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./helper/scroll-to-top";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import backgroundimg from "./assets/pylons-sunset.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <div
        style={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.85)",
            minHeight: "100vh",
          }}
        >
          <App />
        </div>
      </div>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
