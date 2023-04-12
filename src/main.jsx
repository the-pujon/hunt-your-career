import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import Blog from "./pages/Blog/Blog";
import "./index.scss";
import JobDetails from "./components/JobDetails/JobDetails";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/Jobs.json"),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "jobdetails/:jobId",
        element: <JobDetails />,
      },
      {
        path: "appliedjobs",
        element: <AppliedJobs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
