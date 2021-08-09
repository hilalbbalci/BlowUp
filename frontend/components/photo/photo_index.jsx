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
            <div className="photo-index-container">
                <div className="first-item">
                    <h3>Welcome to BlowUp</h3>
                    <p>Follow photographers to get started</p>
                </div>
                

                <div className="photos-slices-container">

                    <ul className="photo-item-container">
                        {photos.slice(0, 3).map((photo, idx) => (
                            <li className="photo-item" key={idx}>
                                <Link to={`/photos/${photo.id}`} >
                                    <img className="photo-img" src={photo.post} />
                                </Link>
                            </li>
                        ))}
                        </ul>
                    <ul className="photo-item-container">
                        {photos.slice(3, 6).map((photo, idx) => (
                                <li className="photo-item" key={idx}>
                                    <Link to={`/photos/${photo.id}`} >
                                        <img className="photo-img" src={photo.post} />
                                    </Link>
                                </li>
                        ))};
                    </ul>
                    <ul className="photo-item-container">
                        {photos.slice(6, 9).map((photo, idx) => (
                            <li className="photo-item" key={idx}>
                                <Link to={`/photos/${photo.id}`} >
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
