import { useLoaderData } from "react-router-dom";
import HomeBanner from "../home-banner/HomeBanner";
import TopPackages from "../top-packages/TopPackages";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <HomeBanner/>
            <TopPackages data={data}/>
        </div>
    );
};

export default Home;