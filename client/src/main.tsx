import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // ✅ import BrowserRouter

createRoot(document.getElementById("root")!).render(
  <BrowserRouter> {/* ✅ wrap App in BrowserRouter */}
    <App />
  </BrowserRouter>
);
