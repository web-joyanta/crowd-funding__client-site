import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import RunningCampaigns from "../components/RunningCampaigns";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <RunningCampaigns data={data}></RunningCampaigns>
        </div>
    );
};

export default Home;