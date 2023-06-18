import { createBrowserRouter } from "react-router-dom";
import Home from '../components/HomePage/Home';
import ItemDetails from "../components/DetailPage/ItemDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
]);

export default router;