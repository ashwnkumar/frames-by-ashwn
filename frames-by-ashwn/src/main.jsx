import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import Bio from "./Components/Bio/Bio.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import People from "./Components/Portfolio/People/People.jsx";
import Places from "./Components/Portfolio/Places/Places.jsx";
import Misc from "./Components/Portfolio/Misc/Misc.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="" element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="portfolio/people" element={<People />} />
      <Route path="portfolio/places" element={<Places />} />
      <Route path="portfolio/misc" element={<Misc />} />
      <Route path="bio" element={<Bio />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
