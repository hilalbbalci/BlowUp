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
         e.preventDefault();
         let user= this.props.user;
         let currentUser= this.props.currentUser;   
         let currentUserIdStr = (currentUser.id).toString();
         let userIdStr = (user.id).toString();
         if (!user.followers.includes(currentUserIdStr)) {
            user.followers.push(currentUserIdStr);
            currentUser.followings.push(userIdStr);
            console.log(user);
            console.log(currentUser);
             this.props.updateUser(user).then(updatedUser => console.log(updatedUser)); 
             this.props.updateUser(currentUser).then(updatedCurrentUser => console.log(updatedCurrentUser)); 
         } else {
             let idx = user.followers.indexOf(currentUserIdStr);
             console.log(idx)
             delete user.followers[idx];
             console.log(user.followers);
             let idx2 = currentUser.followings.indexOf(userIdStr);
             console.log(idx2)
             delete currentUser.followings[idx2];
             console.log(currentUser.followings);
             this.props.updateUser(user).then(user=> console.log(user));
             this.props.updateUser(currentUser).then(user=> console.log(user));
            
         }
       

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
                    <div className="follows-count">
                      {user.followers ? <p>{user.followers.length} followers,</p> : null}
                      <br />
                      {user.followings ? <p>   {user.followings.length} follows</p> : null}   
                    </div>
                   
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
