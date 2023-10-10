import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../context-provider/AuthProvider";
const Navbar = () => {
    const { loggedUser, logOut } = useContext(AuthContext);
    console.log(loggedUser);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("log out successfull");
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    const navigate = useNavigate();
    return (
        <header>
            <div className="navbar nav-bg min-h-0 px-1 md:px-6 lg:px-10 py-4">
                <div className="navbar-start gap-2 lg:gap-0 w-3/5 md:w-1/2" >
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="flex flex-col gap-2 dropdown-content mt-4 z-[1] p-3 shadow nav-bg rounded-box w-52">
                            <li><NavLink to="/" className="block px-4 py-2 bg-btnPrimaryBg text-white font-medium hover:bg-[#12486B]">Home</NavLink></li>
                            <li><NavLink to="/packages" className="block px-4 py-2 bg-btnPrimaryBg text-white font-medium hover:bg-[#12486B]">Packages</NavLink></li>
                            <li><NavLink to="/blogs" className="block px-4 py-2 bg-btnPrimaryBg text-white font-medium hover:bg-[#12486B]">Blogs</NavLink></li>
                            <li><NavLink to="/gallery" className="block px-4 py-2 bg-btnPrimaryBg text-white font-medium hover:bg-[#12486B]">Gallery</NavLink></li>
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">Yay Birthday!</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4">
                        <li><NavLink to="/" className="inline-block px-4 py-2 bg-btnPrimaryBg text-white font-medium hover:bg-[#12486B]">Home</NavLink></li>
                        <li><NavLink to="/packages" className="inline-block px-4 py-2 bg-btnPrimaryBg text-white font-medium hover:bg-[#12486B]">Packages</NavLink></li>
                        <li><NavLink to="/blogs" className="inline-block px-4 py-2 bg-btnPrimaryBg text-white font-medium hover:bg-[#12486B]">Blogs</NavLink></li>
                        <li><NavLink to="/gallery" className="inline-block px-4 py-2 bg-btnPrimaryBg text-white font-medium hover:bg-[#12486B]">Gallery</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end w-2/5 md:w-1/2">
                    {
                        loggedUser ?
                            <button onClick={handleLogOut} className="font-semibold px-4 py-2 text-white text-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">Log Out</button>
                            :
                            <button onClick={() => navigate("/login")} className="font-semibold px-4 py-2 text-white text-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">Log In</button>

                    }
                </div>
            </div>
        </header>
    );
};

export default Navbar;