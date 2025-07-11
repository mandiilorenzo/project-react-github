import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repositories } from "./pages/Repositories";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/repositories/:repository",
        element: <Repositories/>,
    }
]);