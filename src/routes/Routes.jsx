import { createBrowserRouter } from "react-router-dom";
import Home from '../components/HomePage/Home';
import ItemDetails from "../components/DetailPage/ItemDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }, 
    {
        path: 'item/:id',
        element: <ItemDetails />
    }
]);

export default router;