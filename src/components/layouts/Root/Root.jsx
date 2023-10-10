import { Outlet } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Root = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    return (
        <div className="font-primaryFont max-w-[1440px] mx-auto">
            <Navbar />
            <div className="mx-1 md:mx-6 lg:mx-10">
                <Outlet />
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <Footer />
        </div>
    );
};

export default Root;