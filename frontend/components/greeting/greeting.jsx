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
                <li className="user-icon"> 
                {/* < HiOutlineUserCircle size='40'/> */}
                <svg stroke="white" fill="rgb(118, 120, 122)" stroke-width="0" viewBox="0 0 24 24" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <ul className="drop-menu">
                        <li><Link to={`/users/${currentUser.id}`} >Profile</Link></li>
                        <li>Portfolio</li>
                        <li>Resources</li>
                        <li>Stats</li>
                        <li>Galleries</li>
                        <li>
                            <button id="logout-button" onClick={logout}>Log out</button>
                        </li>
                    </ul>
                </li>
                <li>
                    {/* <RiMessage2Line size="30"/> */}
                <svg stroke="white" fill="rgb(118, 120, 122)" stroke-width="0" viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z"></path></g></svg>
                </li>
                <li>
                    {/* <RiNotification3Line size="30"/> */}
                <svg stroke="white" fill="rgb(118, 120, 122)" stroke-width="0" viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"></path></g></svg>
                </li>
                <li className="upload-photo">
                    <Link to="/upload" >
                        <IoArrowUp size="18"/>
                        Upload
                    </Link>
                </li>
            </ul>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
