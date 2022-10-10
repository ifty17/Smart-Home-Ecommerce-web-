import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Root from "../components/Root";
import Shop from '../components/Shop';
import About from '../components/About';
import ErrorPage from '../components/ErrorPage';    


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader:() => fetch('products.json') ,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/home',
            element: <Home></Home>
        },
        {
            path:'/shop',
            element: <Shop></Shop>
        },
        {
            path:'/about',
            element: <About></About>
        },
    ]
  },
]);



export default router;