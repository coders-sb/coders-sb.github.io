import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './pages/index.tsx'
import About from './pages/about.tsx'
import Resources from './pages/resources.tsx';
import ProjectSeries from './pages/project-series.tsx';
import Events from './pages/events.tsx';
import Alumni from './pages/alumni.tsx';
import './index.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/project-series",
    element: <ProjectSeries />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/alumni",
    element: <Alumni />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
