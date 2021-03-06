import React from "react";
import CommentIndexContainer from "./comment_index_container";
import ReactDOM from "react-dom";


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =  this.props.preloadedState;


       
        this.toggleButtons = this.toggleButtons.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
 
   
    toggleButtons() {
        this.setState({ showButtons: !this.state.showButtons });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.comment.comment.length > 0) {
            this.props.createComment(this.state);
            
        }
      
        this.setState(this.props.preloadedState);

        
       
    }

    handleCancel() {
        this.setState(this.props.preloadedState);
        this.toggleButtons();
    }
 

    renderButtons() {
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
        this.setState({ comment: { comment: e.currentTarget.value, photo_id: this.props.photoId } });
        delete this.state.showButtons;

 
    }
 

    render() {
        return (
        <div>
            <form className="comment-form">
                <div className="comment-input-container">
                    <img src={this.props.currentUser.profile}/>
                    <div className="comment-form-input" onClick={this.toggleButtons}>
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
            <CommentIndexContainer />

        </div>
            
        );
    }
}

export default CommentForm;