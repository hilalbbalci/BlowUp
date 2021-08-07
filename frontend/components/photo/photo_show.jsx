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
            <div>
                hello
                <div className="photo-show-container">
                    <div className="photo-show-box1">
                        <i className="fas fa-arrow-left" onClick={this.handleback}></i>
                    </div>
                    <div className="photo-show-box2">
                        <div>
                            <img className="photo-show-img" src={photo.post} />
                        </div>
                    </div>
                </div>
                <div className="photo-show-info">
                    <div className="photo-info">
                        <div className="photo-info-box1">
                            <div className="photo-info-box2">
                                <i onClick={() => this.props.history.push(`/users/${photo.userId}`)} className="fas fa-user-circle profile_logo"></i>
                                <h5>{photo.title}</h5>
                            </div>
                            <p>{photo.description}</p>
                        </div>
                    </div>
                </div>
                <div className="comment-container">
                    <CreateCommentContainer photoId={this.props.photo.id}/>
                    <CommentIndexContainer />
                </div>
            </div>
        )
    }

}

export default PhotoShow;