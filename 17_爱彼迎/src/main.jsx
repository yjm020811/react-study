import { createRoot } from "react-dom/client";
import "virtual:uno.css";
import "normalize.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
