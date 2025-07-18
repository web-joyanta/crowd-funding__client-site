import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { FiTwitter, FiGithub, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-5 py-10">
                <div className="">
                    <img className="w-24 pb-5" src={logo} alt="" />
                    <p>Empowering innovators and changemakers through community funding.</p>
                    <div className="flex gap-3 text-2xl pt-4">
                        <Link to="https://x.com/web_joyanta" target="_blank" rel="noopener noreferrer">
                            <FiTwitter className="hover:text-primary" />
                        </Link>
                        <Link to="https://github.com/web-joyanta" target="_blank" rel="noopener noreferrer">
                            <FiGithub className="hover:text-primary" />
                        </Link>
                        <Link to="mailto:web.joyanta@email.com" target="_blank" rel="noopener noreferrer">
                            <FiMail className="hover:text-primary" />
                        </Link>
                    </div>
                </div>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">Company</h6>
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/campaigns" className="link link-hover">All Campaigns</Link>
                    <Link to="/addCampaign" className="link link-hover">Start a Campaign</Link>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <hr className="max-w-7xl mx-auto px-5 text-gray-300" />
            <div className="py-5">
                <p className="text-center text-sm pb-2">
                    Made with <FiHeart className="inline text-red-400" /> by Joyanta Team
                </p>
                <p className="text-center text-sm">© {new Date().getFullYear()} CrowdCube. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;