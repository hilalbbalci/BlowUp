import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi";


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
            if(comment){
               const idPhoto = comment.photoId.toString();
            
            if(idPhoto === this.props.photoId) {
                return (
                    <div className="comment-info-box"> 
                        <p><HiOutlineUserCircle size="30"/></p>                           
                        <div className="next-to-photo">  
                            <li> {comment.comment}</li>                                     
                        </div>    
                    </div>
                );  
            } else {
                return 
            }     
        }});
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
        return (
        <div className="comments-last-container">
            <h3>Comments</h3>  
            <ul className="comment-list">
                {this.renderCommentsOfAPhoto()}
                {this.renderEmptyCommentsMessage()}
            </ul>
        </div>
        )

    }

}

export default CommentIndex;
