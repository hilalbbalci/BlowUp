import React from "react";
import { Redirect } from 'react-router-dom';
import CreateCommentContainer from '../comments/create_comment_container';
import CommentIndexContainer from '../comments/comment_index_container';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
        };
        this.handleback = this.handleback.bind(this)
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.id);
    }

    handleback() {
        this.props.history.goBack();
    }


    render() {

        const { photo } = this.props;

        if (!photo) return null;
        
        return (
        <div className="photo-show-biggest-container">
            <div className="photo-show-container">
                <div className="photo-show-box">
                    {/* <div className="photo-show-box1">
                        <i className="fas fa-arrow-left" onClick={this.handleback}></i>
                    </div> */}
                    <div className="photo-show-box2">
                        <div>
                            <img className="photo-show-img" src={photo.post} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="photo-show-info">
                    <div className="photo-info-box1">
                        <div className="photo-info-box2">
                            {/* <i onClick={() => this.props.history.push(`/users/${photo.userId}`)} className="fas fa-user-circle profile_logo"></i> */}
                            <h2>{photo.title}</h2>
                        </div>
                        <p>{photo.description}</p>
                    </div>
            </div>
            <br />
            <div className="comment-container">
                <CreateCommentContainer photoId={this.props.photo.id}/>
                <CommentIndexContainer />
            </div>
        </div>
        )
    }

}

export default PhotoShow;