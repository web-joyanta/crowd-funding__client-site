import { TbUsers, TbWorld } from "react-icons/tb";
import { FiBarChart } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import Lottie from "lottie-react";
import whyChooseAnimation from "../assets/choosing.json";

const WhyChoose = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 mt-7 lg:mt-10">
            <div>
                <Lottie animationData={whyChooseAnimation} className="w-96 mx-auto"></Lottie>
                <h2 className="text-center text-3xl md:text-4xl font-bold">Why Choose CrowdCube?</h2>
                <p className="text-[#4B5563] text-center mt-5 lg:px-72">Our platform provides everything you need to successfully fund your project or support causes you care about.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-12">
                <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md group">
                    <TbUsers className="text-primary text-5xl group-hover:-translate-y-2 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold py-2">Community-Powered</h3>
                    <p className="text-[#4B5563] text-sm">Join thousands of backers supporting causes they believe in and making a difference together.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md group">
                    <FiBarChart className="text-primary text-5xl group-hover:-translate-y-2 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold py-2">Transparent Funding</h3>
                    <p className="text-[#4B5563] text-sm">Track exactly how your contributions are making an impact with real-time campaign updates.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md group">
                    <TbWorld className="text-primary text-5xl group-hover:-translate-y-2 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold py-2">Global Reach</h3>
                    <p className="text-[#4B5563] text-sm">Support and create campaigns from anywhere in the world, connecting people across borders.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md group">
                    <MdOutlineSecurity className="text-primary text-5xl group-hover:-translate-y-2 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold py-2">Secure Platform</h3>
                    <p className="text-[#4B5563] text-sm">Rest easy knowing your information and contributions are protected by enterprise-grade security.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;