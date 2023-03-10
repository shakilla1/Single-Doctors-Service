import React, { useContext } from 'react';
import imgNav from './drnav.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>

            <div className="navbar bg-slate-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='mr-2' to='/'>Home</Link></li>
                            <li><Link to='/addservice'>Add Service</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/review'>Review</Link></li>
                            <li><Link to='/allcard'>My Service</Link></li>

                        </ul>
                    </div>

                    <span><img className='image-size pl-12 ' src={imgNav} alt="" /></span>
                    <a className="btn btn-ghost text-white normal-case text-xl"><Link to='/'>Dr.Muhammad Aziz</Link></a>

                    <div className="dropdown lg:hidden dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>

                                <>
                                    {
                                        user?.uid ?
                                            <>
                                                {/* <span>{user?.displayName}</span> */}
                                                <button variant="light" onClick={handleLogOut}>Logout</button>
                                            </>
                                            :
                                            <>
                                                <Link to='/login'>Login</Link>

                                            </>
                                    }


                                </>
                            </a></li>

                        </ul>
                    </div>
                </div>
                <div className="navbar-center text-white hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        <li tabIndex={0}>

                        </li>
                        <li><Link className='mr-2' to='/'>Home</Link></li>
                        <li><Link to='/addservice'>Add Service</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/allcard'>My Service</Link></li>
                        <li><Link to='/review'>Review</Link></li>
                        {/* <li><Link to='/login'>Login</Link></li> */}

                        {/* {user?.photoURL ?
                            <image className='items-center'
                                style={{ height: '30px' }}
                                rounded
                                src={user?.photoURL}>
                            </>
                            :
                            <FaUser></FaUser>
                        } */}
                    </ul>
                </div>
                <>
                    {
                        user?.uid ?
                            <>
                                {/* <span>{user?.displayName}</span> */}
                                <button variant="light" onClick={handleLogOut}>Logout</button>
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>

                            </>
                    }


                </>
                <div className="dropdown hidden  dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>

                            <>
                                {
                                    user?.uid ?
                                        <>
                                            {/* <span>{user?.displayName}</span> */}
                                            <button variant="light" onClick={handleLogOut}>Logout</button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'>Login</Link>

                                        </>
                                }


                            </>
                        </a></li>

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Header;