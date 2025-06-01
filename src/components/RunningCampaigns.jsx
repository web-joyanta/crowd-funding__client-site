import CardCampaign from "./CardCampaign";

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
    console.log(data);
    return (
        <div className="max-w-7xl mx-auto px-5 mt-7">
            <h2 className="text-center text-3xl md:text-4xl font-bold mt-20">Running Campaigns</h2>
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