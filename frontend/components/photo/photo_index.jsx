import React from "react";
import { Link } from "react-router-dom";

class PhotoIndex extends React.Component {
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
        let photoTank = {};
        
        for( let i=0; i< photos.length;i++){
            let photo = photos[i]
           if(!photoTank[photo.userId]){
            photoTank[photo.userId] = [photo] ;
        } else {
            photoTank[photo.userId].push(photo)
        } }

    //   console.log(photoTank);
        return (
            <div className="photo-index-container">
                <div className="first-item">
                    <h3>Welcome to BlowUp</h3>
                    <p>Follow photographers to get started</p>
                </div>

                <div className="featured-photos">
                    <h2>Featured photographers</h2>
                    <p>Follow to explore new works</p>
                    <div className="photos-slices-container">
                        {users.slice(0, 6).map(user => (
                            <ul className="photo-item-container">                              
                                {photoTank[user.id] ? photoTank[user.id].map(photo=> (
                                    <li className="photo-item">
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </li>
                                )): null}       
                            </ul> 
                            // {user.username}
                        ))}

                        {/* <div className="photo-with-user">
                          <ul className="photo-item-container">
                            {photos.slice(3, 6).map((photo, idx) => (
                                <li className="photo-item" key={idx}>
                                    <Link to={`/photos/${photo.id}`} >
                                        <img className="photo-img" src={photo.post} />
                                    </Link>
                                </li>
                            ))}
                            </ul>  
                        </div> */}
                        
                        {/* <div className="photo-with-user">
                             <ul className="photo-item-container">
                            {photos.slice(6, 9).map((photo, idx) => (
                                <li className="photo-item" key={idx}>
                                    <Link to={`/photos/${photo.id}`} >
                                        <img className="photo-img" src={photo.post} />
                                    </Link>
                                </li>
                            ))}
                            </ul>
                        </div> */}
                        {/* <div className="photo-with-user">
                            <ul className="photo-item-container">
                                {photos.slice(9, 12).map((photo, idx) => (
                                    <li className="photo-item" key={idx}>
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="photo-with-user">
                            <ul className="photo-item-container">
                                {photos.slice(12, 15).map((photo, idx) => (
                                    <li className="photo-item" key={idx}>
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        {/* <div className="photo-with-user">
                            <ul className="photo-item-container">
                                {photos.slice(15, 18).map((photo, idx) => (
                                    <li className="photo-item" key={idx}>
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                       
                    </div>
                </div>
                    
                <div className="photos-all" >
                    <div className="one-section">
                        <h2>Editors' Choice</h2>
                        <p>Photos selected by our Editors</p>
                        <div className="column">
                            <div className="row">    
                                {photos.slice(9, 11).map((photo, idx) => (
                                <div key={idx}>
                                    <Link to={`/photos/${photo.id}`} >
                                        <img className="photo-img" src={photo.post} />
                                    </Link>
                                </div>
                                ))}
                            </div>
                            <div className="row">
                            {photos.slice(11, 13).map((photo, idx) => (
                                <div key={idx}>
                                    <Link to={`/photos/${photo.id}`} >
                                        <img className="photo-img" src={photo.post} />
                                    </Link>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="one-section">
                        <h2>Featured Galleries</h2>
                        <p>Best Galeries o BlowUp</p>
                        <div className="column">
                            <div className="row">
                                {photos.slice(17, 19).map((photo, idx) => (
                                    <div key={idx}>
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                {photos.slice(19, 21).map((photo, idx) => (
                                    <div key={idx}>
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="one-section">
                        <h2>Quests</h2>
                        <p>Photo contests to challange you</p>
                        <div className="column">
                            <div className="row">
                                {photos.slice(13, 15).map((photo, idx) => (
                                    <div key={idx}>
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                {photos.slice(15, 17).map((photo, idx) => (
                                    <div key={idx}>
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="last-div">

                </div>
            </div>
        )
    }

};

export default PhotoIndex;
