import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
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
            const date = new Date(comment.createdAt).toLocaleDateString();
            return (
                <div key={comment.id} className="comment-item">
                    <div className="comment-info-container">
                        {/* <UserIcon /> */}
                        <div className="comment-user-info">
                            <div className="comment-content-item">
                                <Link
                                    className="comment-username"
                                    to={`/users/${comment.commenterId}`}
                                >
                                    {this.props.users[comment.commenterId].username}
                                </Link>
                                <p className="comment-date">{date}</p>
                            </div>
                            <div className="comment-content-item">
                                <p className="comment-content">{comment.comment}</p>
                                {this.props.currentUserId === comment.commenterId && (
                                    <div
                                        className="comment-delete"
                                        onClick={() => this.handleDelete(comment.id)}
                                    >
                                        delete
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }).reverse();
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
                {this.renderEmptyCommentsMessage()}
            </ul>
        </div>
        )

    }

}

export default CommentIndex;
