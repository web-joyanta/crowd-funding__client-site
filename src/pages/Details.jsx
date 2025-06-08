import { useLoaderData } from "react-router-dom";
import { FiCalendar, FiDollarSign, FiFlag, FiUser } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaDollarSign, FaRegHeart } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
import { toast } from "react-toastify";
import ProgressBar from "@ramonak/react-progress-bar";
import { CiCalendar } from "react-icons/ci";

const Details = () => {
    const loaderDetailsData = useLoaderData();
    const { title, photo, description, amount, date, campaignType, userPhoto, userName, userEmail } = loaderDetailsData;
    const [dd, mm, yyyy] = date.split('/');
    const targetDate = new Date(`${yyyy}-${mm}-${dd}`);
    const today = new Date();

    targetDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(loaderDetailsData);
    return (
        <div className="max-w-7xl mx-auto px-5 mt-7">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-5 place-items-start">
                {/* card 1*/}
                <div className="col-span-2">
                    <div className="card bg-base-100 shadow-md">
                        <figure>
                            <img className="w-full"
                                src={photo}
                                alt="card-photo" />
                            <span className="absolute z-10 top-4 left-4 px-4 py-1 bg-[#DBEAFE] text-xs font-medium text-[#1E40AF] rounded-2xl">{campaignType}</span>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">{title}</h2>
                            {/* user name/date */}
                            <div className="text-[#4B5563] flex items-center py-2">
                                <FiUser className="mr-2" /> <span> Created by {userName}</span>
                                <RxDotFilled className="mx-2" />
                                <FiCalendar className="mr-2" /> <span> Created on {date}</span>
                            </div>
                            <p className="text-[#4B5563] font-medium">{description}</p>
                            {/* Deadline/Time/Donate */}
                            <div className="flex flex-wrap gap-5 py-5">
                                <div className="bg-[#F3F4F6] flex items-center gap-2 p-3 rounded-lg">
                                    <FiCalendar className="text-blue-800 text-lg" />
                                    <div>
                                        <p className="text-[#4B5563]">Deadline</p>
                                        <p className="text-[15px] font-medium">{date}</p>
                                    </div>
                                </div>
                                <div className="bg-[#F3F4F6] flex items-center gap-2 p-3 rounded-lg">
                                    <MdOutlineAccessTime className="text-blue-800 text-xl" />
                                    <div>
                                        <p className="text-[#4B5563]">Time Left</p>
                                        <p className="text-[15px] font-medium">
                                            {diffDays > 0 ? `${diffDays} days` : <span className="text-red-600">Campaign Ended</span>}
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-[#F3F4F6] flex items-center gap-2 p-3 rounded-lg">
                                    <FiDollarSign className="text-blue-800 text-lg" />
                                    <div>
                                        <p className="text-[#4B5563]">Minimum Donation</p>
                                        <p className="text-[15px] font-medium">${amount}</p>
                                    </div>
                                </div>
                            </div>
                            {/* buttons */}
                            <div className="card-actions">
                                {
                                    diffDays > 0 ? <button className="btn w-full btn-primary mb-2"><FaRegHeart /> Donate Now</button> :
                                        <button className="btn btn-disabled w-full btn-primary mb-2"><FaRegHeart /> Donate Now</button>
                                }
                                <button onClick={() => toast.success("Share link copied to clipboard!")} class="btn btn-outline btn-primary"><GrShareOption /> Share</button>
                                <button onClick={() => toast.warning("Report submitted. Thank you for helping keep CrowdCube safe.")} class="btn btn-outline btn-primary"><FiFlag /> Report</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-full bg-base-100 shadow-md sticky top-24">
                    <div className="card-body">
                        <div className="mt-6">
                            {/* prograss-bar */}
                            <div className="flex justify-between mb-1">
                                <span className="text-xl font-semibold">${60}</span>
                                <span className="text-[#4B5563]">of ${amount * 10} goal</span>
                            </div>
                            <ProgressBar
                                completed={60}
                                maxCompleted={amount * 10}
                                height="10px"
                                bgColor="linear-gradient(to right, rgb(14, 165, 233), rgb(139, 92, 246))"
                                animateOnRender="true"
                                transitionDuration="2s"
                                isLabelVisible={false}
                            />
                            <div className="flex justify-between text-[#4B5563] mt-4">
                                <span className="flex items-center gap-1"><CiCalendar />
                                    {diffDays > 0 ? `${diffDays} days left` : <span className="text-red-600">Campaign ended</span>}
                                </span >
                                <span className="flex items-center gap-1"><FaDollarSign />Min: ${amount}</span>
                            </div>
                            {/* Donate Button */}
                            {
                                diffDays > 0 ? <button className="btn lg:btn-lg btn-primary btn-block mt-7"><FaRegHeart /> Donate Now</button> :
                                    <button className="hidden btn lg:btn-lg btn-primary btn-block mt-7"><FaRegHeart /> Donate Now</button>
                            }
                            
                            {/* Campaign Creator */}
                            <div className="mt-7">
                                <h4 className="text-[16px] font-medium">Campaign Creator</h4>
                                <div className="flex items-center gap-3 mt-4">
                                    <img className="w-10 rounded-full" src={userPhoto || "https://i.ibb.co/qYXx2bJW/6515860.webp"} alt="user-img" />
                                    <div>
                                        <h4 className="font-medium">{userName}</h4>
                                        <p className="text-xs text-[#4B5563]">{userEmail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;