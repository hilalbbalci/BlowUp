import React from 'react';
import {Link} from 'react-router-dom';

 class UserProfile extends React.Component {
     constructor(props) {
         super(props);
         this.state= {
             followed: false,
            
         };
         this.follow = this.follow.bind(this);
     }
     follow() {
         const newFollow = {
            follow: {
                followerId: this.props.currentUser.id,
                followedId: this.props.user.id
            }
         };
         console.log(newFollow);
         
         if (this.state.followed) {
             this.setState({followed: false})
            //  this.props.deleteFollow(follow.id)
         } else {
            this.setState({followed: true});
            this.props.createFollow(newFollow).then(follow => console.log(follow));
         }
      
     }

    render() {
        const {currentUser, user, photos} = this.props;
        if(!user) return null;
        if(!photos) return null;
        
        return (
            <div className="profile-page">
                <div className="profile-entry-photo">
                  <img src={photos[10].post} />
                </div>
                <div className="profile-username-photo">
                    <img src={user.profile}/> 
                    <h3>{user.username}</h3>
                </div>
                {currentUser.id === user.id ? <Link to='/profilephoto'>Edit</Link> : null}
              
                <div className="follow-btn">
                    <button onClick={this.follow}>{this.state.followed? <p>Unfollow</p> : <p>Follow</p>}</button>
                </div>
            </div>
        )
        
    }
}
export default UserProfile;
