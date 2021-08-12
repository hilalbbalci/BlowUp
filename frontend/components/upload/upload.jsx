import React from "react";
import { Link } from 'react-router-dom';


class Upload extends React.Component {
    render() {
        return (
            <div className="upload-group-app">
                <Link to='/upload' className="upload-link">Upload</Link> 
                <div className="upload-group">
                    <p>Get unlimited uploads. You have 7 uploads remaining until the end of day Aug 18, 2021. <strong>Upgrade membership</strong></p>
                </div>
            </div>
        
        )
    }       
    
}

export default Upload;