import React from 'react';

 class UserProfile extends React.Component {
     constructor(props) {
         super(props);
         this.state= {
             followed: false,
         };
         this.follow = this.follow.bind(this);
     }
     follow() {
         const follow = {
            followerId: this.props.currentUser.id,
            followedId: this.props.user.id
         };
         console.log(follow);
         
         if (this.state.followed) {
             this.setState({followed: false})
            //  this.props.deleteFollow(follow.id)
         } else {
            this.setState({followed: true});
            this.props.createFollow(follow).then(follow => console.log(follow));
         }
      
     }

    render() {
        const {user, photos} = this.props;
        if(!user) return null;
        if(!photos) return null;
        
        return (
            <div>
                <div className="profile-entry-photo">
                  <img src={photos[10].post} />
                </div>
                <div className="profile-username-photo">
                    <img src={user.profile}/> 
                    <h3>{user.username}</h3>
                </div>
                <div>
                    <button onClick={this.follow}>{this.state.followed? <p>Unfollow</p> : <p>Follow</p>}</button>
                </div>
            </div>
        )
        
    }
}
export default UserProfile;
