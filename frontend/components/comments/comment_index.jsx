import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";




class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wannaedit: false,
        }
    
    }

    componentDidMount() {
        this.props.fetchComments();
    }
    deleteComment(commentId) {
        this.props.deleteComment(commentId);
    }
    wannaedit(){
        this.setState({wannaedit: true})
    }
   

    renderCommentsOfAPhoto() {
        if(!this.props.photoId) {
            return null;
        }
        return this.props.comments.reverse().map((comment, idx) => {
            if(comment.photoId){
               const idPhoto = comment.photoId.toString();
              
            if(idPhoto === this.props.photoId) {
                return (
                    <div key={idx} className="comment-info-box"> 
                        <div>
                            <img src={this.props.users[comment.commenterId].profile} />
                            <div className="next-to-photo"> 
                                <li className="commenter-name"> {this.props.users[comment.commenterId].username} </li>
                                {this.props.currentUser.id === comment.commenterId ? 
                                <li>{this.state.wannaedit ? <input type="text" value={comment.comment}></input> : <li>{comment.comment}</li>}</li> :
                                <li> {comment.comment}</li>  }                                   
                            </div> 
                        </div>
                     
                        <div>
                            {this.props.currentUser.id === comment.commenterId ? (<button onClick={this.props.deleteComment.bind(this, comment.id)} className="delete-btn"><RiDeleteBin6Line size="15" /></button>) : (<div></div>)}
                            {this.props.currentUser.id === comment.commenterId ? (<button onClick={this.props.wannaedit.bind(this)} className="edit-btn"><GrEdit size="15" /></button>) : (<div></div>)}
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
        return (
        <div className="comments-last-container"> 
            <ul className="comment-list">
                {this.renderCommentsOfAPhoto()}
                {this.renderEmptyCommentsMessage()}
            </ul>
        </div>
        )

    }

}

export default CommentIndex;
