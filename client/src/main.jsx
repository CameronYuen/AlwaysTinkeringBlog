import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tags from "./pages/Tags.jsx";
import Authors from "./pages/Authors.jsx";
import MonthArchive from "./pages/MonthArchive.jsx";
import YearArchive from "./pages/YearArchive.jsx";
import Contact from "./pages/Contact.jsx";
import SingleBlogPage from "./pages/SingleBlogPage.jsx";
import TennisGear from "./pages/TennisGear.jsx";
import TennisJourney from "./pages/TennisJourney.jsx";
import Miata from "./pages/Miata.jsx";
import Travel from "./pages/Travel.jsx";
import Life from "./pages/Life.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/tags",
    element: <App element={<Tags />} />,
  },
  {
    path: "/authors",
    element: <App element={<Authors />} />,
  },
  {
    path: "/monthly-archive",
    element: <App element={<MonthArchive />} />,
  },
  {
    path: "/yearly-archive",
    element: <App element={<YearArchive />} />,
  },
  {
    path: "/contact",
    element: <App element={<Contact />} />,
  },
  {
    path: "/tennis-gear",
    element: <App element={<TennisGear />} />,
  },
  {
    path: "/tennis-journey",
    element: <App element={<TennisJourney />} />,
  },
  {
    path: "/miata",
    element: <App element={<Miata />} />,
  },
  {
    path: "/travel",
    element: <App element={<Travel />} />,
  },
  {
    path: "/life",
    element: <App element={<Life />} />,
  },
  {
    path: "/blog/:id",
    element: <App element={<SingleBlogPage />} />,
  },
], {
  basename: "/AlwaysTinkeringBlog"
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
