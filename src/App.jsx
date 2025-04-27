import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Navbar from "./_components/navbar/Navbar";
import Footer from "./_components/footer/Footer";
import Checkout from './pages/order/Checkout';
import Success from "./pages/success/Success";
function App() {
  const Layout = () => {
    return (
      <div className="app">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
    )
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[ 
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ]

    }
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
