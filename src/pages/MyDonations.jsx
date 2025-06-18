import { useLoaderData } from "react-router-dom";
import CardDonate from "../components/CardDonate";

const MyDonations = () => {
    const loaderDonateData = useLoaderData();
    const donateDataReverse = [...loaderDonateData].reverse();
    console.log(donateDataReverse);
    console.log(loaderDonateData);
    return (
        <div className="max-w-7xl mx-auto px-5 mt-7">
            <h2 className="text-3xl md:text-4xl font-bold mt-20">My Donations</h2>
            <p className="text-[#4B5563] my-5">Track all the campaigns you've supported</p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12">
                {
                  donateDataReverse.map(donateData => <CardDonate key={donateData._id} donateData={donateData}></CardDonate>)  
                }
            </div>
        </div>
    );
};

export default MyDonations;