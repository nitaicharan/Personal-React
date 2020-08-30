import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Comment } from '../../../../models/Comment';

interface IProps extends Comment {
}

export class CommentComponent extends Component<IProps> {
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <p className="card-text">{this.props.body}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/${this.props.author?.username}`} className="comment-author">
                        <img src={this.props.author.image} className="comment-author-img" />
                    </Link>
                    <Link to={`/${this.props.author?.username}`} className="comment-author">
                        &nbsp;{this.props.author?.username}
                    </Link>
                    <span className="date-posted">{this.props.createdAt}</span>
                </div>
            </div>
        )
    }
}