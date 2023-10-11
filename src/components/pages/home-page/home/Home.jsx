import { useLoaderData } from "react-router-dom";
import HomeBanner from "../home-banner/HomeBanner";
import TopPackages from "../top-packages/TopPackages";
import OurTeam from "./our-team/OurTeam";
import Contact from "./contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    const data = useLoaderData();
    return (
        <div>
            <HomeBanner/>
            <TopPackages data={data}/>
            <OurTeam/>
            <Contact/>
        </div>
    );
};

export default Home;