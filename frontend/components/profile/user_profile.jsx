import React from 'react';
import {Link} from 'react-router-dom';

 class UserProfile extends React.Component {
     constructor(props) {
         super(props);
         this.state= {
             followed: (this.props.follows.some(follow => follow.followedId === this.props.user.id && follow.followerId === this.props.currentUser.id)),
            
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

         if(this.props.follows.some(follow=> follow.followedId === this.props.user.id && follow.followerId === this.props.currentUser.id)) {
             this.props.deleteFollow(this.props.follows.filter(follow => follow.followedId === this.props.user.id && follow.followerId === this.props.currentUser.id));
             this.setState({ followed: false });
         } else {
             this.setState({ followed: true });
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
                {currentUser.id === user.id ? 
                <div className="follow-btn"><Link to='/profilephoto'>Edit</Link></div> :
                <div className="follow-btn">
                    <button onClick={this.follow}>{this.state.followed? <p>Unfollow</p> : <p>Follow</p>}</button>
                </div>
                }
            </div>
        )
        
    }
}
export default UserProfile;
