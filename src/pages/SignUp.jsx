import { Link } from "react-router-dom";
import login_bd from "../assets/login-bd.jpg"
import { FaGoogle } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const SignUp = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${login_bd})` }} className="hero bg-center bg-cover min-h-screen px-5">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl px-16 py-10">
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-medium">Sign Up</h2>
                        <fieldset className="fieldset text-[15px]">
                            <input type="text" className="input w-full  rounded-4xl border-2 p-6 mt-2" placeholder="Enter Name" />
                            <input type="email" className="input w-full  rounded-4xl border-2 p-6 my-2" placeholder="Enter Email" />
                            <input type="text" className="input w-full  rounded-4xl border-2 p-6 mb-2" placeholder="Enter Photo Url" />
                            <input type="email" className="input w-full rounded-4xl border-2 p-6" placeholder="Enter Password" />
                            <button className="btn bg-[#218838] text-white text-[15px] w-full rounded-4xl p-6 mt-2">Sign Up</button>
                            <p className="text-center font-medium">OR</p>
                            <button className="btn flex justify-between bg-[#1874eb] text-white text-[15px] w-full rounded-4xl p-6">
                                <FaGoogle className="text-2xl" />
                                <span>Continue With Google</span>
                                <span></span>
                            </button>
                            <p className="text-center font-medium mt-3">Already a member? <Link to="/login" className="underline text-[#218838] font-medium">Login</Link></p>
                            <Link to="/" className="mx-auto text-4xl text-[#218838] mt-4" ><IoArrowBackCircleOutline /></Link>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;