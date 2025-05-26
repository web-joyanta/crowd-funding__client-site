import { FiImage } from "react-icons/fi";
import { MdOutlineTitle, MdOutlineEmail } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { CiCalendar, CiDollar } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-router-dom";

const AddCampaign = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 mt-7">
                <div class="text-white bg-linear-to-l from-sky-500 to-indigo-500 rounded-t-lg px-6 py-5">
                    <h2 className="text-2xl font-semibold">Create New Campaign</h2>
                    <p className="text-[15px] font-extralight">Fill in the details to start your fundraising journey</p>
                </div>
                <div className="bg-base-100 w-full  shrink-0 shadow-2xl rounded-b-lg">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label text-[14px] font-medium text-[#374151]"><FiImage />Campaign Image URL</label>
                            <input type="url" className="input w-full mb-4" placeholder="https://url.com/image.jpg" />
                            <label className="label text-[14px] font-medium text-[#374151]"><MdOutlineTitle />Campaign Title</label>
                            <input type="text" className="input w-full mb-4" placeholder="Give your campaign a clear, attention-grabbing title" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <div>
                                        <label className="label text-[14px] font-medium text-[#374151]"><CgNotes />Campaign Type</label>
                                        <select defaultValue="Pick a color" className="select w-full mb-4">
                                            <option>Personal Issue</option>
                                            <option>Startup</option>
                                            <option>Business</option>
                                            <option>Creative Ideas</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="label text-[14px] font-medium text-[#374151]"><CiCalendar />Campaign Deadline</label>
                                        <input type="date" className="input w-full mb-4" />
                                    </div>
                                    <div>
                                        <label className="label text-[14px] font-medium text-[#374151]"><CiDollar />Minimum Donation Amount($10)</label>
                                        <input type="number" defaultValue="10" className="input w-full mb-5" required placeholder="Enter Amount Minimum $10" />
                                    </div>
                                </div>
                                {/*  */}
                                <div>
                                    {/* User Name - Read Only */}
                                    <div>
                                        <label className="label text-[14px] font-medium text-[#374151]"><RxPerson />Your Name</label>
                                        <input type="text" readOnly className="input w-full bg-gray-200" placeholder="John Doe" />
                                        <p className="mt-1 mb-3 text-xs text-gray-500">This field cannot be edited</p>
                                    </div>

                                    {/* User Email - Read Only */}
                                    <div>
                                        <label className="label text-[14px] font-medium text-[#374151]"><MdOutlineEmail />Your Email</label>
                                        <input type="email" readOnly className="input w-full bg-gray-200" placeholder="john.doe@example.com" />
                                        <p className="mt-1 text-xs text-gray-500">This field cannot be edited</p>
                                    </div>
                                </div>
                            </div>
                            <fieldset className="fieldset">
                                <label className="label text-[14px] font-medium text-[#374151]"><CgNotes />Campaign Description</label>
                                <textarea className="textarea h-24 w-full" placeholder="Explain your campaign's purpose, goals, and how the funds will be used ..."></textarea>
                                <div className="label">Be detailed about your campaign's purpose and goals</div>
                            </fieldset>
                            <div className="text-end">
                                <Link to="/" className="btn w-auto md:w-1/8 mr-5">Back</Link>
                                <button className="btn bg-[#1874eb] text-white sm:btn-sm md:btn-md ">Add Campaign</button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCampaign;