import CardCampaign from "./CardCampaign";
import Lottie from "lottie-react";
import running from "../assets/Running.json";

const RunningCampaigns = ({ data }) => {
    const result = data.filter(campaign => {
        const { date } = campaign;
        const [dd, mm, yyyy] = date.split('/');
        const targetDate = new Date(`${yyyy}-${mm}-${dd}`);
        const today = new Date();

        targetDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        return targetDate > today;
    });
    const dataReverse = [...result].reverse();
    return (
        <div className="max-w-7xl mx-auto px-5 mt-7">
            <Lottie animationData={running} className="w-40 mx-auto"></Lottie>
            <h2 className="text-center text-3xl md:text-4xl font-bold ">Running Campaigns</h2>
            <p className="text-[#4B5563] text-center mt-5">Discover and support these trending campaigns before they end.</p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12">
                {
                    dataReverse.slice(0, 6).map(campaign => <CardCampaign key={campaign._id} campaign={campaign}></CardCampaign>)
                }
            </div>
        </div>
    );
};

export default RunningCampaigns;