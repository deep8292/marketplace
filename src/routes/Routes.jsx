import { createBrowserRouter } from "react-router-dom";
import Home from '../components/HomePage/Home';
import ItemDetails from "../components/DetailPage/ItemDetails";
import AddProduct from "../components/AddProduct/AddProduct";
import CartDetails from "../components/CartDetails/CartDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }, 
    {
        path: 'item/:id',
        element: <ItemDetails />
    },
    {
        path: 'addProduct',
        element: <AddProduct />
    },
    {
        path: 'cart',
        element: <CartDetails />
    }
]);

export default router;