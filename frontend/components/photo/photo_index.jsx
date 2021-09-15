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
    // follow(e) {
    //     e.preventDefault();
    //     let currentUser = this.props.currentUser;
    //     let currentUserIdStr = (currentUser.id).toString();
    //     let userIdStr = (user.id).toString();
    //     if (!user.followers.includes(currentUserIdStr)) {
    //         user.followers.push(currentUserIdStr);
    //         currentUser.followings.push(userIdStr);
    //         this.props.updateUser(user).then(updatedUser => console.log(updatedUser));
    //         this.props.updateUser(currentUser).then(updatedCurrentUser => console.log(updatedCurrentUser));
    //     } else {
    //         let idx = user.followers.indexOf(currentUserIdStr);
    //         delete user.followers[idx];
    //         let idx2 = currentUser.followings.indexOf(userIdStr);
    //         delete currentUser.followings[idx2];
    //         this.props.updateUser(user).then(user => console.log(user));
    //         this.props.updateUser(currentUser).then(user => console.log(user));
    //     }
    // }

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
                        {users.slice(1, 4).map(user => (
                            <div className="photos-with-username">
                                <ul className="photo-item-container">                              
                                    {(photoTank[user.id] && photoTank[user.id].length === 3) ? photoTank[user.id].map(photo=> (
                                        <li className="photo-item">
                                            <Link to={`/photos/${photo.id}`} >
                                                <img className="small-img" src={photo.post} />
                                            </Link>
                                        </li>
                                    )): null}     
                                </ul> 
                                <div className="username-profile-photo">
                                        {(photoTank[user.id] && photoTank[user.id].length === 3) ?
                                        <div>
                                            <div>
                                                <img className='user-photo' src={user.profile} />
                                                <div className='username' onClick={this.handleClick(`/users/${user.id}`).bind(this)}>{user.username}</div>
                                            </div>
                                            {/* <button onClick={this.follow}><p>Unfollow</p></button> */}
                                        </div> : null
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
