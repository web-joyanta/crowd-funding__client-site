import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext);
    const links = <>
        <NavLink className="mr-4" to="/"><li>Home</li></NavLink>
        <NavLink className="mr-4" to="/campaigns"><li>All Campaign</li></NavLink>
        <NavLink className="mr-4" to="/addCampaign"><li>Add Campaign</li></NavLink>
        <NavLink className="mr-4" to="/myCampaign"><li>My Campaign</li></NavLink>
        <NavLink className="mr-4" to="/myDonations"><li>My Donations</li></NavLink>
    </>
    const handleLogout = () => {
        userLogout()
            .then(() => {
                toast.success("Log-Out.");
            })
            .catch((error) => {
                const errorMessage = error.code.message;
                toast.error(errorMessage);
            });
    }
    return (
        <div className="bg-base-100 shadow-sm py-2 md:py-2 sticky top-0 z-20">
            <div className="navbar max-w-7xl mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow items-center">
                            {links}
                        </ul>
                    </div>
                    <Link to="/"><img className="w-24 lg:w-32" src={logo} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <div className="relative group inline-block">
                                {/* Avatar Button Trigger */}
                                <button className="flex items-center space-x-2 p-2 rounded-full">
                                    <img
                                        src={user?.photoURL || 'https://i.ibb.co/qYXx2bJW/6515860.webp'}
                                        alt="Avatar"
                                        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-[#674DF3]"
                                    />
                                </button>
                                {/* Dropdown Menu */}
                                <div className="absolute right-0 mt-2 w-52 lg:w-64 bg-white shadow-xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 space-y-2">
                                    <div className="flex flex-col items-center border-b pb-3">
                                        <p className="lg:text-lg font-semibold">{user?.displayName || 'Guest User'}</p>
                                        <p className="text-xs lg:text-sm text-gray-500">{user?.email || 'no-email@example.com'}</p>
                                    </div>
                                    <div>
                                        <button onClick={handleLogout} className="w-full bg-[#674DF3] hover:bg-[#563bd1] text-white text-sm font-medium py-1 lg:py-2 px-4 rounded-lg transition">Log out </button>
                                    </div>
                                </div>
                            </div> :
                            <Link to="/login" className="btn btn-md text-gray-200 bg-[#674DF3]">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;