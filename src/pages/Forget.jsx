import { Link } from "react-router-dom";
import login_bd from "../assets/login-bd.jpg"
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Forget = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${login_bd})` }} className="hero bg-center bg-cover min-h-screen px-5">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl px-16 py-10">
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-medium">Reset Password</h2>
                        <p className="text-[15px] text-center">Enter the email address or mobile number associated with your account.</p>
                        <fieldset className="fieldset text-[15px]">
                            <input type="text" className="input w-full  rounded-4xl border-2 p-6 my-2" placeholder="Enter Email or Mobile Number" />
                            <button className="btn bg-[#218838] text-white text-[15px] w-full rounded-4xl p-6">Reset Password</button>
                            <p className="text-center mt-3">Return to <Link to="/login" className="underline text-[#218838] font-medium">Login</Link></p>
                            <Link to="/" className="mx-auto text-4xl text-[#218838] mt-4" ><IoArrowBackCircleOutline /></Link>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forget;