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
    handleClick(route) {
        return (e) => this.props.history.push(route);
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
            photoTank[photo.userId].push(photo);
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
                            <div className="photos-with-username">
                                <ul className="photo-item-container">                              
                                    {(photoTank[user.id] && photoTank[user.id].length === 3) ? photoTank[user.id].map(photo=> (
                                        <li className="photo-item">
                                            <Link to={`/photos/${photo.id}`} >
                                                <img className="photo-img" src={photo.post} />
                                            </Link>
                                        </li>
                                    )): null}     
                                </ul> 
                                <div className="username-profile-photo">
                                    {(photoTank[user.id] && photoTank[user.id].length === 3) ? 
                                    <div className='username' onClick={this.handleClick(`/users/${user.id}`).bind(this)}>{user.username}</div> : null
                                    }
                                </div>    
                            </div>
                        ))}
                    </div>
                </div>
                    
                <div className="photos-all" >
                    <div className="one-section">
                        <h2>Editors' Choice</h2>
                        <p>Photos selected by our Editors</p>
                        <div className="column">
                            <div className="row">    
                                {photos.slice(22, 24).map((photo, idx) => (
                                <div key={idx}>
                                    <Link to={`/photos/${photo.id}`} >
                                        <img className="photo-img" src={photo.post} />
                                    </Link>
                                </div>
                                ))}
                            </div>
                            <div className="row">
                            {photos.slice(12, 14).map((photo, idx) => (
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
                                {photos.slice(14, 16).map((photo, idx) => (
                                    <div key={idx}>
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                {photos.slice(16, 18).map((photo, idx) => (
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
                                {photos.slice(18, 20).map((photo, idx) => (
                                    <div key={idx}>
                                        <Link to={`/photos/${photo.id}`} >
                                            <img className="photo-img" src={photo.post} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                {photos.slice(20, 22).map((photo, idx) => (
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
