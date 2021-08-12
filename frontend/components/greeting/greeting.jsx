import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowUp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiMessage2Line, RiNotification3Line } from "react-icons/ri";



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
       
            <nav className="login-signup">
            <Link to="/login">Log in</Link>
            <Link to="/signup" className="signup">Sign up</Link>
            </nav> 
       
       
       
        
    );
    const personalGreeting = () => (
            <ul className="logout-upload-photo">
                <li classNmae="user-icon"> < HiOutlineUserCircle size='40'/>
                    <ul className="drop-menu">
                        <li>Profile</li>
                        <li>Portfolio</li>
                        <li>Resources</li>
                        <li>Stats</li>
                        <li>Galleries</li>
                        <li>
                            <button id="logout-button" onClick={logout}>Log out</button>
                        </li>
                    </ul>
                </li>
                <li><RiMessage2Line size="30"/></li>
                <li><RiNotification3Line size="30"/></li>
                <li className="upload-photo"><Link to="/upload" ><IoArrowUp/>Upload</Link></li>
            </ul>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
