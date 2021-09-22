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
 
  
    componentDidMount () {
      
            this.props.fetchUsers();

    }


  
    
    follow(e) {
        e.preventDefault();
        let user= this.props.user;
        let currentUser= this.props.currentUser;   
        let currentUserIdStr = (currentUser.id).toString();
        let userIdStr = (user.id).toString();
        console.log(user.followers.includes(currentUserIdStr));
        console.log(currentUser.followings.includes(userIdStr));
        if (!user.followers.includes(currentUserIdStr) && !currentUser.followings.includes(userIdStr)) {
            console.log('if');
            user.followers.push(currentUserIdStr);
            currentUser.followings.push(userIdStr);
            console.log(user);
            console.log(currentUser);
            this.props.updateUser(user).then(updatedUser => console.log(updatedUser)); 
            this.props.updateUser(currentUser).then(updatedCurrentUser => console.log(updatedCurrentUser)); 
        } else {
            console.log('else');
            let idx = user.followers.indexOf(currentUserIdStr);
            delete user.followers[idx];
            if(user.followers.every(el=> el === null)) {
                user.followers.push("delete");
            }
            console.log(user.followers);
            let idx2 = currentUser.followings.indexOf(userIdStr);
            delete currentUser.followings[idx2];
            if (currentUser.followings.every(el => el === null)) {
                currentUser.followings.push("delete");
            }
            console.log(currentUser.followings);
            this.props.updateUser(user).then(resp => console.log(resp.user.followers));
            this.props.updateUser(currentUser).then(resp=> console.log(resp.user.followings));    
        }
    }

    render() {
        const {currentUser, user, photos} = this.props;
        if (!user) return null;
        if (!photos) return null;
 
        return (
            <div className="profile-page">
                <div className="profile-entry-photo">
                  {photos[10] ?  <img src={photos[10].post} /> : null  }
                </div>
                <div className="profile-username-photo">
                    <img src={user.profile}/> 
                    <h3>{user.username}</h3>
                    <div className="follows-count">
                      {user.followers ? <p>
                          {user.followers.some(el=> el === 'delete') ? user.followers.length-1 : user.followers.length} followers,</p> : null}
                      <br />
                      {user.followings ? <p>   
                            {user.followings.some(el => el === 'delete') ? user.followings.length - 1 :user.followings.length} follows</p> : null}   
                    </div>
                   
                </div>
                {currentUser.id === user.id ? 
                <div className="follow-btn">
                        <Link to='/profilephoto'><GrEdit/></Link>
                </div> :
                <div className="follow-btn">
                    <button onClick={this.follow}>{(user.followers.includes(currentUser.id.toString()) && currentUser.followings.includes(user.id.toString())) ? <p>Unfollow</p> : <p>Follow</p>}</button>
                </div>
                }
            </div>
        )
        
    }
}
export default UserProfile;
