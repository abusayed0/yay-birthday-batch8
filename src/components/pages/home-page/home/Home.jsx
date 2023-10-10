import { useLoaderData } from "react-router-dom";
import HomeBanner from "../home-banner/HomeBanner";
import TopPackages from "../top-packages/TopPackages";
import OurTeam from "./our-team/OurTeam";
import Contact from "./contact/Contact";


const Home = () => {
    
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