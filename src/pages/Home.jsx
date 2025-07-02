import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import RunningCampaigns from "../components/RunningCampaigns";
import WhyChoose from "../components/WhyChoose";
import CampaingLife from "../components/CampaingLife";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <RunningCampaigns data={data}></RunningCampaigns>
            <WhyChoose></WhyChoose>
            <CampaingLife></CampaingLife>
        </div>
    );
};

export default Home;