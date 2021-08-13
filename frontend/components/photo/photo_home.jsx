import React from "react";
import { Link } from "react-router-dom";

class PhotoHome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchUsers();
    }

    render() {
        const { photos } = this.props;
        const { users } = this.props;
        if (!photos) return null;
        if (!users) return null;
        // console.log(photos)
        // console.log(users)
        
        
        return (
            <div className="photo-index-box">
                <h2>Editors' Choice</h2>
                <p>Photos selected by our Editors</p>
                
                <div className="row-all">    
                    {photos.map((photo, idx) => (
                    <div key={idx}>
                        <li>
                            <img className="photo-img" src={photo.post} />
                        </li>
                    </div>
                    ))}
                
                </div>
                <div className="last-div">
                </div>
            </div>
           
        )
    }

};

export default PhotoHome;
