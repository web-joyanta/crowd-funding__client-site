import { Link } from "react-router-dom";
import login_bd from "../assets/login-bd.jpg"
import { FaGoogle } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const from = e.target;
        // const name = from.name.value;
        const email = from.email.value;
        // const photo = from.photo.value;
        const password = from.password.value;


        // password validation
        if (password.length <= 6) {
            return setError("Use at least 6 characters.");
        } else if (!/[A-Z]/.test(password)) {
            return setError("Add an uppercase letter.");
        } else if (!/[a-z]/.test(password)) {
            return setError("Add a lowercase letter.");
        } else {
            setError("");
        }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    title: "Successful!",
                    icon: "success",
                    draggable: true
                });
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.code.message;
                console.log(errorMessage);
            });
        from.reset();
    }
    return (
        <div>
            <div style={{ backgroundImage: `url(${login_bd})` }} className="hero bg-center bg-cover min-h-screen px-5">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl px-16 py-10">
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-medium">Register</h2>
                        <form onSubmit={handleRegister} className="fieldset text-[15px]">
                            <input name="name" type="text" className="input w-full  rounded-4xl border-2 p-6 mt-2" placeholder="Enter Name" />
                            <input name="email" type="email" className="input w-full  rounded-4xl border-2 p-6 my-2" placeholder="Enter Email" />
                            <input name="photo" type="url" className="input w-full  rounded-4xl border-2 p-6 mb-2" placeholder="Enter Photo Url" />
                            <input name="password" type="password" className="input w-full rounded-4xl border-2 p-6" placeholder="Enter Password" />
                            <button className="btn bg-[#218838] text-white text-[15px] w-full rounded-4xl p-6 mt-2">Register</button>
                            <p className="text-center font-medium">OR</p>
                            <button className="btn flex justify-between bg-[#1874eb] text-white text-[15px] w-full rounded-4xl p-6">
                                <FaGoogle className="text-2xl" />
                                <span>Continue With Google</span>
                                <span></span>
                            </button>
                            <p className="text-center text-error">{error}</p>
                            <p className="text-center font-medium mt-3">Already a member? <Link to="/login" className="underline text-[#218838] font-medium">Login</Link></p>
                            <Link to="/" className="mx-auto text-4xl text-[#218838] mt-4" ><IoArrowBackCircleOutline /></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;