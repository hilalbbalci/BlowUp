import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments();
    }
   

    renderCommentsOfAPhoto() {
        if(!this.props.photoId) {
            return null;
        }
        return this.props.comments.map(comment => {
            const idPhoto = comment.photoId.toString();
            if(idPhoto === this.props.photoId) {
                return (
                        <ul>
                            <li> {comment.comment}</li>
                        </ul>   
                 );  
            } else {
                return 
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
        // let recentComments;
        // this.props.comments.map(comment => {
        //     const idPhoto = comment.photoId.toString();
        //     if (idPhoto === this.props.photoId) {
        //         recentComments.push(comment)
        //     }
        // };
        return (<div>
           <strong> Comments </strong>
            <ul className="comment-list">
                {this.renderCommentsOfAPhoto()}
                {this.renderEmptyCommentsMessage()}
            </ul>
        </div>
        )

    }

}

export default CommentIndex;
