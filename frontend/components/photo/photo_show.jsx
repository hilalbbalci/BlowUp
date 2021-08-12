import React from "react";
import { Redirect } from 'react-router-dom';
import CreateCommentContainer from '../comments/create_comment_container';
import CommentIndexContainer from '../comments/comment_index_container';
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiHeartLine, RiFolderAddLine, RiShareLine} from "react-icons/ri";
import {Link} from 'react-router-dom';


class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     id: "",
        // };
        this.handleback = this.handleback.bind(this)
      
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.id);
        this.props.fetchUser((this.props.fetchPhoto(this.props.match.params.id)).userId);
       
        // this.props.fetchUser(photo);
    }

    handleback() {
        this.props.history.goBack();
    }


    render() {

        const { photo } = this.props;
        const { user } = this.props;
        if (!photo) return null;
        console.log(photo.userId);
        console.log(user)
        // console.log(this.props.users[photo.userId]);

        
        return (
        <div className="photo-show-biggest-container">
            <div className="photo-show-container">
                <div className="photo-box">
                    <img className="photo-show-img" src={photo.post} /> 
                    {/* <Link to={`/photos/${(photo.id) + 1}`} > go </Link> */}
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
                            <p><HiOutlineUserCircle size="70"/></p>
                            {/* <i onClick={() => this.props.history.push(`/users/${photo.userId}`)} className="fas fa-user-circle profile_logo"></i> */}
                            <div className="next-to-photo">
                                <h2>{photo.title}</h2>
                                <p> by </p>
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