import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {" "}
    {/* wrap app in StrictMode to enable additional checks */}
    <App />
  </StrictMode>
);
