import React from 'react';
import WhatMakesUsDifferent from '../what_makes_different/what_makes_us_different';
import {Link} from 'react-router-dom';
class Entry extends React.Component {  
    render() {
       
        return (
            <div>   
                <div className='entry-img-types'>
                    <h1>Discover and share the world’s best photos</h1>
                    <br />
                    <p>Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography.</p>
                    <div className="link">
                        <Link to="/signup" className="signup">Sign up</Link>
                    </div>

                </div>
                <div className="entry-image-box">  
                    <img src="https://blowup-dev.s3.us-west-1.amazonaws.com/entryPhoto.jpeg" />

                    <div className="custom-shape-divider-bottom-1628697126">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>  
                <WhatMakesUsDifferent />
                
            </div>
            
        );


    };

};
export default Entry;

