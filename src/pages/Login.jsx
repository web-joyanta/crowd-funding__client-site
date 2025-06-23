import { Link, useLocation, useNavigate, } from "react-router-dom";
import login_bd from "../assets/login-bd.jpg"
import { FaGoogle } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const { userLogin, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const loaction = useLocation();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                navigate(loaction?.state ? loaction.state : "/");
                toast.success("Login successful!");
            })
            .catch((error) => {
                const errorMessage = error.code.message;
                toast.error(errorMessage);
            })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;

        userLogin(email, password)
            .then(() => {
                setError("");
                from.reset();
               navigate(loaction?.state ? loaction.state : "/");
                toast.success("Login successful!");
            })
            .catch((error) => {
                const errorMessage = error.code;
                if (errorMessage) {
                    setError("Invalid email or password.");
                    toast.error("Invalid email or password.");
                }
            });
    }
    return (
        <div>
            <div style={{ backgroundImage: `url(${login_bd})` }} className="hero bg-center bg-cover min-h-screen px-5">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl px-16 py-10">
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-medium">Login</h2>
                        <form onSubmit={handleLogin} className="fieldset text-[15px]">
                            <input name="email" type="email" required className="input w-full  rounded-4xl border-2 p-6 my-2" placeholder="Enter Email" />
                            <input name="password" type="password" required className="input w-full rounded-4xl border-2 p-6" placeholder="Enter Password" />
                            <Link to="/forget" className="text-center mt-2 mb-4 link link-hover underline">Forgot password ?</Link>
                            <button className="btn bg-[#218838] text-white text-[15px] w-full rounded-4xl p-6">Log in</button>
                            <p className="text-center font-medium">OR</p>
                            <button type="button" onClick={handleGoogleLogin} className="btn flex justify-between bg-[#1874eb] text-white text-[15px] w-full rounded-4xl p-6">
                                <FaGoogle className="text-2xl" />
                                <span>Continue With Google</span>
                                <span></span>
                            </button>
                            <p className="text-center text-error">{error}</p>
                            <p className="text-center mt-3">Not on Oxyy yet? <Link to="/register" className="underline text-[#218838] font-medium">Register</Link></p>
                            <Link to="/" className="mx-auto text-4xl text-[#218838] mt-4" ><IoArrowBackCircleOutline /></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;