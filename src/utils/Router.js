import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Shop from "../components/Shop";
import { getCartAndProductsData } from "../Loaders/getCardAndProductsData";
import Cart from '../components/Cart'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: getCartAndProductsData,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/about',
                element: <About></About>,
            }
        ]
    }
])

export default router;