import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import CategorieDetails from "../Categorie/CategorieDetails";
import ProductDetails from "../Categorie/ProductDetails";
import MyCart from "../Categorie/MyCart";
import UpdateProducts from "../Categorie/UpdateProducts";
import Signup from "../SignIn/Signup";
import Login from "../SignIn/Login";
import PrivateRoutes from "./PrivateRoutes";
import ErrorElement from "../ErrorPage/ErrorElement";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/',
            element: <Home></Home>
            
        },
        {
          path: '/addproduct',
          element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
        },
        {
          path: '/details/:clickedName',
          element: <CategorieDetails></CategorieDetails>,
          loader: ()=>fetch('https://brand-shop-server-1ihppeltp-jannat-ara-haque-juis-projects.vercel.app/brand')
        },
        {
          path: '/productdetails/:id',
          element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://brand-shop-server-1ihppeltp-jannat-ara-haque-juis-projects.vercel.app/brand/${params.id}`)

        },
        {
          path: '/cart',
          element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
          loader: ()=>fetch('https://brand-shop-server-1ihppeltp-jannat-ara-haque-juis-projects.vercel.app/product')
        },
        {
          path: '/update/:id',
          element: <PrivateRoutes><UpdateProducts></UpdateProducts></PrivateRoutes>,
          loader: ({params}) => fetch(`https://brand-shop-server-1ihppeltp-jannat-ara-haque-juis-projects.vercel.app/brand/${params.id}`)
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
        
      ]
    },
  ]);



export default router;