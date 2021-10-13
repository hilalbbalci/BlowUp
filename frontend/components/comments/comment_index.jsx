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
        };
        this.edit = this.edit.bind(this);
    
    }

    componentDidMount() {
        this.props.fetchComments();
    }
    // componentDidUpdate() {
    //     this.props.fetchComments();

    // }
  
    deleteComment(commentId) {
        this.props.deleteComment(commentId).then(resp=> {console.log(resp)});
    }
    wannaedit(){
        // let comments = this.props.comments.filter(comment => (comment.commenterId === this.props.currentUser.id) && (comment.photoId.toString() === this.props.photoId));
        this.setState({wannaedit: true});
    }
   
   
    edit(value, comment){
        let edittablecomment = {
            comment: value,
            photoId: comment.photoId,
            commenterId: comment.commenterId,
            id: comment.id
        };
        edittablecomment.comment.length > 0 ? 
            this.props.updateComment(edittablecomment).then(()=> {
                this.setState({ wannaedit: false });
            }) : alert("Make a comment");
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
                        <div>
                            <img src={this.props.users[comment.commenterId].profile} />
                            <div className="next-to-photo"> 
                                <li className="commenter-name"> {this.props.users[comment.commenterId].username} </li>
                                {this.props.currentUser.id === comment.commenterId ? 
                                    <li>{this.state.wannaedit ? <div>
                                        <input 
                                        className="editted-comment" type="text" ></input>
                                        <button onClick={()=> this.edit(document.querySelector(".editted-comment").value, comment)}>Edit</button>
                                        <button onClick={()=> this.setState({wannaedit: false})}>Cancel</button>
                                        </div> : <li>{comment.comment}</li>
                                        }</li> : <li> {comment.comment}</li>  }                                   
                            </div> 
                        </div>
                     
                        <div>
                            {this.props.currentUser.id === comment.commenterId ? (<button onClick={this.props.deleteComment.bind(this, comment.id)} className="delete-btn"><RiDeleteBin6Line size="15" /></button>) : (<div></div>)}
                            {this.props.currentUser.id === comment.commenterId ? (<button onClick={this.wannaedit.bind(this)} className="edit-btn"><GrEdit size="15" /></button>) : (<div></div>)}
                        </div>  
                    </div>
                );  
            } else {
                return null;
            }     
        }});
    }

    renderEmptyCommentsMessage() {
            return (<li className="comment-zero">
                        No comments yet
                    </li>)
    }

    render() {
        if (!this.props.comments) return null;
        return (
        <div className="comments-last-container"> 
            <ul className="comment-list">
                {this.props.comments.length > 0 ? this.renderCommentsOfAPhoto() : this.renderEmptyCommentsMessage()}
            </ul>
        </div>
        )

    }

}

export default CommentIndex;
