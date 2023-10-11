import { useLoaderData } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import HomeBanner from "../home-banner/HomeBanner";
import TopPackages from "../top-packages/TopPackages";
import OurTeam from "../our-team/OurTeam";
import Contact from "../contact/Contact";
import Seo from "../../../shared/seo/Seo";

const Home = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    const data = useLoaderData();
    return (
        <div>
            <Seo title="Yay Birthday! | Home"/>
            <HomeBanner/>
            <TopPackages data={data}/>
            <OurTeam/>
            <Contact></Contact>
        </div>
    );
};

export default Home;