import { Link, useLoaderData } from "react-router-dom";
import TableCampaing from "../components/TableCampaign";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyCampaign = () => {
    const { user } = useContext(AuthContext);
    const loaderData = useLoaderData() || [];
    const dataReverse = Array.isArray(loaderData) ? [...loaderData].reverse() : [];

    // Filter campaigns for the logged-in user
    const [myCampaigns, setMyCampaigns] = useState(
        user && user.email
            ? dataReverse.filter(campaign => campaign.userEmail === user.email)
            : []
    );

    return (
        <div className="max-w-7xl mx-auto px-5 mt-7">
            <h2 className="text-3xl md:text-4xl font-bold mt-20">My Campaigns</h2>
            <p className="text-[#4B5563] my-5">Manage all your created campaigns</p>
            {user && myCampaigns.length > 0 ? (
                <div className="overflow-x-auto w-full shadow-2xl rounded-lg">
                    <table className="min-w-[600px] w-full text-left">
                        <thead className="bg-[#F3F4F6]">
                            <tr className="border-b border-[#d6d6d6]">
                                <th className="py-2 px-4 w-2/5">CAMPAIGN</th>
                                <th className="py-2 px-4 w-1/6">TYPE</th>
                                <th className="py-2 px-4 w-1/6">CREATED DATE</th>
                                <th className="py-2 px-4 w-1/4 text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myCampaigns.map(campaign => (
                                    <TableCampaing
                                        key={campaign._id}
                                        campaign={campaign}
                                        myCampaigns={myCampaigns}
                                        setMyCampaigns={setMyCampaigns}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="bg-base-200 py-20 rounded-2xl">
                    <div className="text-center text-gray-500 mb-5">No campaigns found for your account.</div>
                    <div className="text-center text-gray-500 mb-10">Start your first crowdfunding campaign and share it with the world.</div>
                    <div className="flex justify-center">
                        <Link to={"/addCampaign"} className="btn btn-primary">Create Your First Campaign</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyCampaign;