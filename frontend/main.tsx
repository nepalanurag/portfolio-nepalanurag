import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import VercelAnalytics from "@/lib/VercelAnalytics";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <VercelAnalytics />
  </React.StrictMode>
);
