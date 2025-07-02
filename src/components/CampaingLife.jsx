import { LuSparkles } from "react-icons/lu";
import { Link } from "react-router-dom";

const CampaingLife = () => {
    return (
        <div className="bg-linear-to-r from-sky-500 via-indigo-500 to-violet-500 mt-20">
            <div className="max-w-7xl mx-auto px-5 mt-7 mb-7 py-16 text-center">
                <div className="flex justify-center text-5xl font-medium text-yellow-300 pb-5"><LuSparkles /></div>
                <h2 className="text-white text-4xl font-medium">Ready to Bring Your Ideas to Life?</h2>
                <p className="text-white lg:px-72 py-5">Join thousands of creators and backers on CrowdCube and start making an impact today.</p>
                <Link to="/addCampaign" className="btn p-6 text-primary">Start Your Campaign</Link>
                <div className="flex flex-col gap-6 md:flex-row md:justify-around text-center text-white mt-16">
                    <div>
                        <h2 className="text-2xl font-bold">50K+</h2>
                        <p>Successful Campaigns</p>
                    </div>
                    <div>
                        <h2  className="text-2xl font-bold">$25M+</h2>
                        <p>Funds Raised</p>
                    </div>
                    <div>
                        <h2  className="text-2xl font-bold">100K+</h2>
                        <p>Happy Backers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaingLife;