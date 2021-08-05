import React from "react";
import { Link } from "react-router-dom";

class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhotos();
        console.log(this.props.photos);
        console.log(this.props.errors);
    }

    render() {
        const { photos } = this.props;
        if (!photos) return null;
        return (
            <div className="upload-container">
                <h3>Discover</h3>
                <div className="discover-container">
                    <ul className="photo-item_container">
                        {photos.map((photo, idx) => (
                            <li className="photo-item">
                                <Link to={`/photos/${photo.id}`} key={idx}>
                                    <img className="photo-img" src={photo.post} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}

export default PhotoIndex;
