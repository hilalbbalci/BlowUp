import React from "react";
import { Link } from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <div className="home-group-app">
                <div className="home-group">
                    <h1>Home Feed</h1>
                    <p>See photos and published Galleries from people you follow.</p>
                </div>
                <Link to='/' className="home-link">Home</Link> 
            </div>
        
        )
    }       
    
}

export default Home;