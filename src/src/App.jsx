import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Layout,
  PortfolioPage,
  ProjectDetails,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portfolio",
          element: <PortfolioPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/:category/:id",
          element: <ProjectDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
