import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.comments);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments();
    }
    handleDelete(id) {
        this.props.deleteComment(id);
    }

    renderComments() {
        return this.props.comments.map(comment => {
            return (
                <div>
                    {comment.comment}
                </div>
            );
        });
    }

    renderEmptyCommentsMessage() {
        if (this.props.comments.length === 0) {
            return (<li className="comment-zero">
                        <br />
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
                {this.renderComments()}
                {/* {this.renderEmptyCommentsMessage()} */}
            </ul>
        </div>
        )

    }

}

export default CommentIndex;
