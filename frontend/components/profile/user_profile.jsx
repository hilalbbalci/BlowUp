import React from 'react';
import {Link} from 'react-router-dom';
import { GrEdit } from "react-icons/gr";


 class UserProfile extends React.Component {
     constructor(props) {
         super(props);
         this.state= {
             followed: false
            
         };
         this.follow = this.follow.bind(this);
     }
    
     follow(e) {
         let user= this.props.user;
         let currentUser= this.props.currentUser;
         e.preventDefault();
        //  if (!user.followers.includes(currentUser.id)) {
            let currentUserIdStr = (currentUser.id).toString();
            let userIdStr = (user.id).toString();
            user.followers.push(currentUserIdStr);
            currentUser.followings.push(userIdStr);
            console.log(user);
            console.log(currentUser);
             this.props.updateUser(user).then(updatedUser => console.log(updatedUser)); 
            
             this.props.updateUser(currentUser).then(updatedCurrentUser => console.log(updatedCurrentUser));
         
        //  } else {
        //      user.followers.filter(el=> el != currentUser.id);
        //      currentUser.followings.filter(el=> el != user.id);
        //      this.props.updateUser(user).then(user=> console.log(user));
        //      this.props.updateUser(currentUser).then(user=> console.log(user));
            
        //  }
       

     }

    render() {
        const {currentUser, user, photos} = this.props;
        if (!user) return null;
        if (!photos) return null;

        
        return (
            <div className="profile-page">
                <div className="profile-entry-photo">
                  <img src={photos[10].post} />
                </div>
                <div className="profile-username-photo">
                    <img src={user.profile}/> 
                    <h3>{user.username}</h3>
                </div>
                {currentUser.id === user.id ? 
                <div className="follow-btn">
                        <Link to='/profilephoto'><GrEdit/></Link></div> :
                <div className="follow-btn">
                        {console.log(this.props.user.followers.includes(this.props.currentUser.id.toString()))}
                        <button onClick={this.follow}>{this.props.user.followers.includes(this.props.currentUser.id.toString()) ? <p>Unfollow</p> : <p>Follow</p>}</button>
                </div>
                }
            </div>
        )
        
    }
}
export default UserProfile;
