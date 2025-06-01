import ProgressBar from "@ramonak/react-progress-bar";
import { CiCalendar } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";

const CardCampaign = ({ campaign }) => {
    const { title, photo, description, amount, date, campaignType } = campaign;
    const [dd, mm, yyyy] = date.split('/');
    const targetDate = new Date(`${yyyy}-${mm}-${dd}`);
    const today = new Date();

    targetDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const shortText = description.split(' ').slice(0, 25).join(' ') + '...';
    return (
        <div className="transition-transform duration-300 hover:scale-105">
            <div className="card bg-base-100 shadow-md h-full">
                <figure className="required">
                    <img className="w-full h-64 transition-transform duration-300 hover:scale-105"
                        src={photo}
                        alt="card-photo" />
                    <span className="absolute z-10 top-4 left-4 px-4 py-1 bg-[#DBEAFE] text-xs font-medium text-[#1E40AF] rounded-2xl">{campaignType}</span>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {/* <p className="text-[#4B5563]">{description}</p> */}
                    <p className="text-[#4B5563] mb-3">{shortText}</p>
                    <div className="flex justify-between">
                        <span>${60} raised</span>
                        <span>Goal: ${amount * 10}</span>
                    </div>
                    <ProgressBar
                        completed={60}
                        maxCompleted={amount * 10}
                        height="10px"
                        bgColor="#7F48EC"
                        animateOnRender="true"
                        transitionDuration="2s"
                        isLabelVisible={false}
                    />
                    <div className="flex justify-between mt-3">
                        <span className="flex items-center gap-1"><CiCalendar />
                            {diffDays !== 0 ? `${diffDays} days left` : <span className="text-red-600">Campaign ended</span>}
                        </span >
                        <span className="flex items-center gap-1"><FaDollarSign />Min: ${amount}</span>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary w-full">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCampaign;