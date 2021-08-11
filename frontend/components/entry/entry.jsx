import React from 'react';
import WhatMakesUsDifferent from '../what_makes_different/what_makes_us_different';
import {Link} from 'react-router-dom';
class Entry extends React.Component {  
    render() {
       
        return (
            <div>
                <div className="entry-middle-div">
                    <WhatMakesUsDifferent />
                </div>
                <div className='entry-img-types'>
                    <h1>Discover and share the world’s best photos</h1>
                    <br />
                    <p>Get inspired with incredible photos from diverse styles and genres around the world. We're not guided by fads—just great photography.</p>
                    <Link to="/signup" className="signup">Sign up</Link>

                </div>
                <div className="entry-image-box">
                    <img src="https://blowup-dev.s3.us-west-1.amazonaws.com/entryPhoto.jpeg"/>
                </div>   
            </div>
            
        );


    };

};
export default Entry;

