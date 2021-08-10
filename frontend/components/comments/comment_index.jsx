import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.photoId);
    }

    componentDidMount() {
        this.props.fetchComments();
    }
   

    renderCommentsOfAPhoto() {
        if(!this.props.photoId) {
            return null;
        }
        return this.props.comments.map(comment => {
            if(comment.photoId === this.props.photoId) {
                 return (
                        <ul>
                            <li> {comment.comment}</li>
                        </ul>   
                 );  
            } else {
                return (
                    {}
                )
            }     
        });
    }

    renderEmptyCommentsMessage() {
        if (this.props.comments.length === 0) {
            return (<li className="comment-zero">
                        No comments yet
                    </li>)
        } else {
            return null;
        }

    }

    render() {
        if (!this.props.comments) return null;
        return (<div>
           <strong>{this.props.comments.length} Comments</strong>
            <ul className="comment-list">
                {this.renderCommentsOfAPhoto()}
                {this.renderEmptyCommentsMessage()}
            </ul>
        </div>
        )

    }

}

export default CommentIndex;
