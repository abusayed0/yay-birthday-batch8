import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root/Root";
import Home from "../components/pages/home-page/home/Home";
import Login from "../components/pages/login-page/login/Login";
import Packages from "../components/pages/packages-page/packages/Packages";

const router = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    children: [
        {
            path: "/",
            loader : () => fetch("/data.json"),
            element: <Home/>
        },
        {
            path: "/packages",
            loader : () => fetch("/data.json"),
            element: <Packages/>
        },
        {
            path: "/login",
            element: <Login/>
        }
    ]
}]);

export default router;