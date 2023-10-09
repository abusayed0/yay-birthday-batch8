import { Outlet } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";

const Root = () => {
    return (
        <div className="font-primaryFont">
            <Navbar/>
            <Outlet />
        </div>
    );
};

export default Root;