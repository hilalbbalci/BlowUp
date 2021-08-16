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
        return this.props.comments.map((comment, idx) => {
            if(comment.photoId){
               const idPhoto = comment.photoId.toString();
            
            if(idPhoto === this.props.photoId) {
                return (
                    <div key={idx} className="comment-info-box"> 
                        <img src={this.props.users[comment.commenterId].profile} />
                        {/* <p><HiOutlineUserCircle size="30"/></p>                            */}
                        <div className="next-to-photo"> 
                            <li className="commenter-name"> {this.props.users[comment.commenterId].username} </li>
                            <li> {comment.comment}</li>                                     
                        </div>    
                    </div>
                );  
            } else {
                return null;
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
