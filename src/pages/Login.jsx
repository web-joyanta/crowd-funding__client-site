import { Link } from "react-router-dom";
import login_bd from "../assets/login-bd.jpg"
import { FaGoogle } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Login = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${login_bd})` }} className="hero bg-center bg-cover min-h-screen px-5">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl px-16 py-10">
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-medium">Login</h2>
                        <fieldset className="fieldset text-[15px]">
                            <input type="email" className="input w-full  rounded-4xl border-2 p-6 my-2" placeholder="Enter Email" />
                            <input type="email" className="input w-full rounded-4xl border-2 p-6" placeholder="Enter Password" />
                            <Link to="/forget" className="text-center mt-2 mb-4"><a className="link link-hover underline">Forgot password ?</a></Link>
                            <button className="btn bg-[#218838] text-white text-[15px] w-full rounded-4xl p-6">Log in</button>
                            <p className="text-center font-medium">OR</p>
                            <button className="btn flex justify-between bg-[#1874eb] text-white text-[15px] w-full rounded-4xl p-6">
                                <FaGoogle className="text-2xl" />
                                <span>Continue With Google</span>
                                <span></span>
                            </button>
                            <p className="text-center mt-3">Not on Oxyy yet? <Link to="/register" className="underline text-[#218838] font-medium">Register</Link></p>
                            <Link to="/" className="mx-auto text-4xl text-[#218838] mt-4" ><IoArrowBackCircleOutline/></Link>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;