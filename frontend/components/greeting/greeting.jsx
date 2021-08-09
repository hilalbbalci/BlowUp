import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowUp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Log in</Link>
            <Link to="/signup" className="signup">Sign up</Link>
        </nav>
        
    );
    const personalGreeting = () => (
            <div className="logout-upload-photo">
            <ul className="profile-logo-and-upload-photo">
                    <li classNmae="user-icon"><FaUserCircle />
                        <ul>
                            <li>
                                <button className="header-button" onClick={logout}>Log out</button>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/upload" className="upload-photo"><IoArrowUp/>Upload</Link></li>
                </ul>
            </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
