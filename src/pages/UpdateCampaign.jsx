import { FiImage } from "react-icons/fi";
import { MdOutlineTitle, MdOutlineEmail } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { CiCalendar, CiDollar } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateCampaign = () => {
    const { _id, photo, title, date, amount, description, campaignType } = useLoaderData();
    const { user } = useContext(AuthContext);
    const Navigate = useNavigate();

    function parseDateString(dateStr) {
        if (!dateStr) return null;
        const [dd, mm, yyyy] = dateStr.split('/');
        return new Date(`${yyyy}-${mm}-${dd}`);
    }

    const [selectedDate, setSelectedDate] = useState(parseDateString(date));
    useEffect(() => {
        setSelectedDate(parseDateString(date));
    }, [date]);

    const handleUpdateCampaign = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const campaignType = form.campaignType.value;
        const date = form.date.value;
        const description = form.description.value;
        const amount = form.amount.value;
        const userPhoto = user?.photoURL;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const newCampaign = { photo, title, date, amount, description, campaignType, userPhoto, userName, userEmail };
        fetch(`https://backend-crowd-funding.vercel.app/campaigns/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Navigate("/myCampaign");
                    Swal.fire({
                        title: "success!",
                        text: 'Campaign Updated',
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 mt-7">
                <div className="text-white bg-linear-to-l from-sky-500 to-indigo-500 rounded-t-lg px-6 py-5">
                    <h2 className="text-2xl font-semibold">Update Campaign</h2>
                    <p className="text-[15px] font-extralight">Make changes to your campaign details.</p>
                </div>
                <div className="bg-base-100 w-full  shrink-0 shadow-2xl rounded-b-lg">
                    <form onSubmit={handleUpdateCampaign} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label text-[14px] font-medium text-[#374151]"><FiImage />Campaign Image URL</label>
                            <input name="photo" required type="url" defaultValue={photo} className="input w-full mb-4" placeholder="https://url.com/image.jpg" />
                            <label className="label text-[14px] font-medium text-[#374151]"><MdOutlineTitle />Campaign Title</label>
                            <input name="title" required type="text" defaultValue={title} className="input w-full mb-4" placeholder="Give your campaign a clear, attention-grabbing title" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <div>
                                        <label className="label text-[14px] font-medium text-[#374151]"><CgNotes />Campaign Type</label>
                                        <select name="campaignType" required defaultValue={campaignType} className="select w-full mb-4">
                                            <option>Personal</option>
                                            <option>Startup</option>
                                            <option>Business</option>
                                            <option>Creative</option>
                                        </select>
                                    </div>
                                    <div className="w-full">
                                        <div className="w-full">
                                            <label className="label text-[14px] font-medium text-[#374151] flex items-center gap-2">
                                                <CiCalendar />
                                                Campaign Deadline
                                            </label>
                                            <div className="relative w-full mb-4">
                                                <DatePicker
                                                    name="date"
                                                    className="input w-full pr-10"
                                                    wrapperClassName="w-full"
                                                    placeholderText="dd/mm/yyyy"
                                                    selected={selectedDate}
                                                    minDate={new Date()}
                                                    onChange={(date) => setSelectedDate(date)}
                                                    dateFormat="dd/MM/yyyy"
                                                    showYearDropdown
                                                    scrollableMonthYearDropdown
                                                    required
                                                />
                                                <CiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="label text-[14px] font-medium text-[#374151]"><CiDollar />Minimum Donation Amount($10)</label>
                                        <input name="amount" min={10} type="number" defaultValue={amount} className="input w-full mb-5" required placeholder="Enter Amount Minimum $10" />
                                    </div>
                                </div>
                                {/*  */}
                                <div>
                                    {/* User Name - Read Only */}
                                    <div>
                                        <label className="label text-[14px] font-medium text-[#374151]"><RxPerson />Your Name</label>
                                        <input defaultValue={user?.displayName} type="text" readOnly className="input w-full bg-gray-200" placeholder="John Doe" />
                                        <p className="mt-1 mb-3 text-xs text-gray-500">This field cannot be edited</p>
                                    </div>

                                    {/* User Email - Read Only */}
                                    <div>
                                        <label className="label text-[14px] font-medium text-[#374151]"><MdOutlineEmail />Your Email</label>
                                        <input defaultValue={user?.email} type="email" readOnly className="input w-full bg-gray-200" placeholder="john.doe@example.com" />
                                        <p className="mt-1 text-xs text-gray-500">This field cannot be edited</p>
                                    </div>
                                </div>
                            </div>
                            <fieldset className="fieldset">
                                <label className="label text-[14px] font-medium text-[#374151]"><CgNotes />Campaign Description</label>
                                <textarea name="description" required defaultValue={description} className="textarea h-24 w-full" placeholder="Explain your campaign's purpose, goals, and how the funds will be used ..."></textarea>
                                <div className="label">Be detailed about your campaign's purpose and goals</div>
                            </fieldset>
                            <div className="text-end">
                                <Link to="/" className="btn w-auto md:w-1/8 mr-5">Back</Link>
                                <button className="btn bg-[#1874eb] text-white sm:btn-sm md:btn-md ">Update Campaign</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCampaign;