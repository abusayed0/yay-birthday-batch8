import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root/Root";
import Home from "../components/pages/home-page/home/Home";
import Login from "../components/pages/login-page/login/Login";
import Packages from "../components/pages/packages-page/packages/Packages";
import PackageDetails from "../components/pages/package-details-page/PackageDetails";
import Register from "../components/pages/resgister-page/register/Register";
import Gallery from "../components/pages/galllery-page/gallery/Gallery";
import Blogs from "../components/pages/blogs-page/blogs/Blogs";
import Protected from "../components/pages/protected-page/Protected";

const router = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    children: [
        {
            path: "/",
            loader: () => fetch("/data.json"),
            element: <Home/>
        },
        {
            path: "/packages",
            loader: () => fetch("/data.json"),
            element: <Packages/>
        },
        {
            path: "/blogs",
            element: <Protected><Blogs/></Protected>
        },
        {
            path: "/gallery",
            element: <Protected><Gallery/></Protected>
        },
        {
            path: "/:id/details",
            loader: () => fetch("/data.json"),
            element: <Protected><PackageDetails/></Protected>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        }
    ]
}]);

export default router;