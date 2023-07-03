import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className="navbar bg-blue-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            <Link to='/'><li><a>Home</a></li></Link>
                            <Link to='about'><li><a>About</a></li></Link>
                            <Link to='services'><li><a>Services</a></li></Link>
                            <Link to='projects'><li><a>Projects</a></li></Link>
                            <Link><li><a>Contact</a></li></Link>


                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-bold text-black-600 ">Sumaiya</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='about'><li><a>About</a></li></Link>
                        <Link to='services'><li><a>Services</a></li></Link>
                        <Link to='projects'><li><a>Projects</a></li></Link>
                        <Link to='contact'><li><a>Contact</a></li></Link>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Header;