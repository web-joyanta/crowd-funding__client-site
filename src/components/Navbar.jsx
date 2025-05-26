import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
const Navbar = () => {
    const links = <>
        <NavLink to="/"><li><a>Home</a></li></NavLink>
        <NavLink to="/campaigns"><li><a>All Campaign</a></li></NavLink>
        <NavLink to="/addCampaign"><li><a>Add Campaign</a></li></NavLink>
        <NavLink to="/myCampaign"><li><a>My Campaign</a></li></NavLink>
        <NavLink to="/myDonations"><li><a>My Donations</a></li></NavLink>
    </>
    return (
        <div className="bg-base-100 shadow-sm py-2 md:py-5">
            <div className="navbar max-w-7xl mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/"><img className="w-32" src={logo} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn btn-md lg:btn-lg text-gray-200 bg-[#674DF3]">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;