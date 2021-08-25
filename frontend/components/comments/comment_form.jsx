import React from "react";
import { HiOutlineUserCircle} from "react-icons/hi";
import CommentIndexContainer from "./comment_index_container";
import ReactDOM from "react-dom";
import CommentIndex from "./comment_index";
// import UserIcon from "../user_profile/user_icon";
// import { faComment as farComment } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);


        this.state = this.props.preloadedState;
       
        this.toggleButtons = this.toggleButtons.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.renderNewComment = this.renderNewComment.bind(this);
    }
 
   componentDidMount() {
       return (ReactDOM.findDOMNode(this));
   }

    toggleButtons() {
        this.setState({ showButtons: !this.state.showButtons });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.comment.comment.length > 0) {
            this.props.action(this.state);
            
        }
        this.setState({ showNewComment: true });
        // this.render();
        this.setState({ showNewComment: true });
        const newComment= this.state.comment.comment;
        this.setState({ comment: { comment: "" ,newComment: newComment } });
        this.renderNewComment(newComment);

        
       
    }

    handleCancel() {
        this.setState(this.props.preloadedState);
        this.toggleButtons();
    }
 

    renderButtons() {
        // console.log(this.state);
        if (this.state.showButtons || this.state.comment.comment.length > 0) {
            return (
                <div className="comment-btns">
                    <div className="cancel-btn" onClick={this.handleCancel}>
                        Cancel
                    </div>
                    <div className="post-comment">
                           <input type="submit" 
                    onClick={this.handleSubmit}
                    disabled={this.state.comment.comment.length === 0}
                    value="Post"
                    />   
                    </div>

                </div>
            );
        }
    }

    handleInput(e) {
        this.setState({ comment: { comment: e.currentTarget.value, photo_id: this.props.photoId , newComment:""} });
        delete this.state.showButtons;

 
    }
    renderNewComment(newComment) {
        let array=this.state.components;
        //const newComment = this.state.comment.newComment;
        array.unshift( newComment);
        this.setState({
            components:array
        })
        console.log(array.length+newComment+this.state.components.length)

    
        // if(this.state.showNewComment === true) {
        //     return (
        //         this.state.components   
        //     )
        // } 
    }

    render() {
        console.log(this.state.components)

        return (
        <div>
            <form className="comment-form">
                <div className="comment-input-container">
                    <img src={this.props.currentUser.profile}/>
                    {/* <p><HiOutlineUserCircle size="30" /></p>                     */}
                    <div className="comment-form-input" onClick={this.toggleButtons}>
                        {/* <FontAwesomeIcon icon={farComment} /> */}
                        <input
                            type="text"
                            onChange={this.handleInput}
                            placeholder="Add a commment"
                            value={this.state.comment.comment}
                        />
                    </div>
                </div>
                {this.renderButtons()}
            </form>
                <div className="comments-last-container">
                    <h3>Comments</h3>
                    <ul className="comment-list">
                        {this.state.components.map((item,i) => {
                            return (
                                <div className="comment-info-box">
                                    <img src={this.props.currentUser.profile} />
                                    <div className="next-to-photo"> 
                                        <li className="commenter-name">{this.props.currentUser.username}</li>
                                        <li>{item}</li>
                                    </div>
                            </div>
                            )
                          
                           
                        })}
                    </ul>
                    <CommentIndexContainer />
                </div>

        </div>
            
        );
    }
}

export default CommentForm;