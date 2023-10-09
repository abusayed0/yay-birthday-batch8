import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root/Root";
import Home from "../components/pages/home/Home";
import Packages from "../components/pages/home/packages/Packages";
import Login from "../components/pages/login/Login";

const router = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/packages",
            element: <Packages/>
        },
        {
            path: "/login",
            element: <Login/>
        }
    ]
}]);

export default router;