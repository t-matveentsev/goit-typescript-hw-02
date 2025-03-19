import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </>
  </StrictMode>
);
