import React from "react";
// import { Redirect } from 'react-router-dom';
import CreateCommentContainer from '../comments/create_comment_container';
import CommentIndexContainer from '../comments/comment_index_container';
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiHeartLine, RiFolderAddLine, RiShareLine} from "react-icons/ri";
import {Link} from 'react-router-dom';
// import { GrNext } from "react-icons/gr";


class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: undefined,
        }
        this.handleback = this.handleback.bind(this);
      
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.id);
        this.props.fetchUsers();
        // this.props.fetchlikes();
        // this.props.fetchlikes();
        // this.setState({userId: this.props.fetchUser(this.props.photo.userId)});
        // this.props.fetchUser(this.props.photo.userId);
        // console.log(this.props.photo);
    
    }

    handleback() {
        this.props.history.goBack();
    }
    // toggleLike() {
    //     let liked = false;
    //     let photoLiked = [];
    //     const { likes } = this.props;
    //     likes.map(like => {
    //         if (like && (this.props.photo.id === this.props.like.photoId) && this.props.session.id == this.props.like.likerId) {
    //             photoLiked.push(this.props.like.id);
    //             liked = true
    //         }
    //     })
      
    //     return (
    //         <div className="like_button_box">
    //             {
    //                 liked ?
    //                     <button className="like_button" onClick={() => this.props.deleteLike(photoLiked[0])}>
    //                         <RiHeartFill size="30" />
    //                     </button> :
    //                     <button className="like_button" onClick={() => this.props.createLike(this.props.session.id, this.props.photo.id)}>
    //                         <RiHeartLine size="30" />
    //                     </button>
    //             }
    //         </div>
    //     )
    // }
    // isUser() {
    //     // debugger
    //     console.log(this.props.session.id)
    //     if (this.props.session === null) {
    //         return null
    //     } else if (this.props.session.id === this.props.photo.userId) {
    //         return null
    //     } else {
    //         return this.toggleLike()
    //     }
    // }

    render() {
       
        const { photo } = this.props;
        // const user = this.props.fetchUser(photo.userId)
        // console.log(photo);
        // console.log(this.props.user);
        // console.log(user);
        // const { user } = this.props;
        // console.log(this.props.likers);
        if (!photo) return null;
        // console.log(photo.likerId);
        // console.log(user)
        // console.log(this.props.users[photo.likerId]);

        // console.log(photo.userId);
        // console.log(this.props.users[photo.userId]);
        const user = this.props.users[photo.userId];
        console.log(user);
        if(!user) return null;
        console.log(this.props.likes);
        return (
        <div className="photo-show-biggest-container">
            <div className="photo-show-container">
                <div className="photo-box">
                    <img className="photo-show-img" src={photo.post} /> 
                    {/* <Link to={`/photos/${(photo.id) + 1}`} ><GrNext size="50"/></Link> */}
                </div>
                
            </div>
            <div className="after-show-photo">
                <div className="photo-show-info">
                    {/* {this.isUser()} */}
                    <div className="logos">
                        <RiHeartLine size="30" />
                        <RiFolderAddLine size="30" />
                        <RiShareLine size="30" />
                    </div>
                    <div className="center-box">
                        <div className="photo-info-box">
                            <p><HiOutlineUserCircle size="70"/></p>
                            {/* <i onClick={() => this.props.history.push(`/likers/${photo.likerId}`)} className="fas fa-liker-circle profile_logo"></i> */}
                            <div className="next-to-photo">
                                <h2>{photo.title}</h2>
                                <p> by {user.username} </p>
                            </div>    
                        </div> 
                        <p>{photo.description}</p>
                    </div>                    
                </div>
                <div className="comment-container">
                    <div className="upgrade">

                    </div>
                    <CreateCommentContainer photoId={this.props.photo.id}/>
                    <CommentIndexContainer />
                </div>
            </div>
        </div>
        )
    }

}

export default PhotoShow;