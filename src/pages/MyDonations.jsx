import { Link, useLoaderData } from "react-router-dom";
import CardDonate from "../components/CardDonate";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const loaderDonateData = useLoaderData();
    const donateDataReverse = [...loaderDonateData].reverse();

    const myDonations = user && user.email
        ? donateDataReverse.filter(donation => donation.donateEmail === user.email)
        : [];

    return (
        <div className="max-w-7xl mx-auto px-5 my-7">
            <h2 className="text-3xl md:text-4xl font-bold mt-20">My Donations</h2>
            <p className="text-[#4B5563] my-5">Track all the campaigns you've supported</p>
            {user && myDonations.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {
                        myDonations.map(donateData => <CardDonate key={donateData._id} donateData={donateData}></CardDonate>)
                    }
                </div>
            ) : (
                <div className="bg-base-200 py-20 rounded-2xl px-2">
                    <div className="text-center text-xl font-medium mb-5">You haven't made any donations yet</div>
                    <div className="text-center text-gray-500 mb-5">Explore campaigns and support causes you care about.</div>
                    <div className="flex justify-center">
                        <Link to={"/campaigns"} className="btn btn-primary">Explore Campaigns</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyDonations;