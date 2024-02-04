import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Counter from "./components/01. useState/01. CounterIssue.jsx";
import Counter1 from "./components/01. useState/02. CurrectCorrection.jsx";
import Form from "./components/01. useState/03. Update objects.jsx";
import Parent from "./components/02. useCallback/01. Parent.jsx";
import Example1 from "./components/03. useMemo/01. example1.jsx";
import UseRef_example1 from "./components/04. useRef/01. useRef_example1.jsx";

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
  {
    path: "/usecallback1",
    element: <Parent />,
  },
  {
    path: "/useMemo1",
    element: <Example1 />,
  },
  {
    path: "/useRef1",
    element: <UseRef_example1 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
