import { CiCalendar, } from "react-icons/ci";
import { Link } from "react-router-dom";

const CardDonate = ({donateData}) => {
    const {_id, title, photo, campaignType, donateDate, donate} = donateData;
    return (
         <div className="transition-transform duration-300 hover:scale-105">
            <div className="card bg-base-100 shadow-md h-full">
                <figure>
                    <img className="w-full h-64 transition-transform duration-300 hover:scale-105"
                        src={photo}
                        alt="card-photo" />
                    <span className="absolute z-10 top-4 left-4 px-4 py-1 bg-[#DBEAFE] text-xs font-medium text-[#1E40AF] rounded-2xl">{campaignType}</span>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-[#4B5563] flex items-center mb-3"><CiCalendar></CiCalendar> Donated on {donateDate}</p>
                    <hr className="text-gray-200" />
                    <div className="card-actions justify-center items-center mt-2">
                        <p className="text-primary font-medium text-xl">${donate}</p>
                        <Link to={`/donate/${_id}`} className="btn btn-outline btn-primary btn-xs">View Campaing</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDonate;