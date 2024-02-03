import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Counter from "./components/01. CounterIssue";
import Counter1 from "./components/02. CurrectCorrection.jsx";
import Form from "./components/03. Update objects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/CounterAppIssue",
    element: <Counter />,
  },
  {
    path: "/CorretUsage",
    element: <Counter1 />,
  },
  {
    path: "/objectUpdate",
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
