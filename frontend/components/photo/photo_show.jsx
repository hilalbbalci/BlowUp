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
        };
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
   
    render() {
       
        const { photo } = this.props;
    
        if (!photo) return null;
        
        const user = this.props.users[photo.userId];
        if(!user) return null;
        console.log(user);
        return (
        <div className="photo-show-biggest-container">
            <div className="photo-show-container">
                <div className="photo-box">
                    <img className="photo-show-img" src={photo.post} /> 
                </div>
                
            </div>
            <div className="after-show-photo">
                <div className="photo-show-info">
                    <div className="logos">
                        <RiHeartLine size="30" />
                        <RiFolderAddLine size="30" />
                        <RiShareLine size="30" />
                    </div>
                    <div className="center-box">
                        <div className="photo-info-box">
                            <img src={user.profile} />
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
                    {/* <CommentIndexContainer /> */}
                </div>
            </div>
        </div>
        )
    }
}

export default PhotoShow;