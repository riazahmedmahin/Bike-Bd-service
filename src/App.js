import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import ServicePage from "./Components/ServicePage";
import AddProduct from "./Components/AddProduct";
import toast, { Toaster } from "react-hot-toast";
import Update from "./Components/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "banner",
          element: <Banner></Banner>,
        },
        {
          path: "products",
          element: <ServicePage></ServicePage>,
        },
        {
          path: "contact",
          element: <Contact></Contact>,
        },
        {
          path: "addproduct",
          element: <AddProduct></AddProduct>,
        },
        {
          path: "/product/:id",
          element: <Update></Update>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/product/${params.id}`),
        },
        {
          path: "/products/product/:id",
          element: <Update></Update>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/product/${params.id}`),
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
