import React, { Component } from 'react';
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'
import { Link } from 'react-router-dom';
import { Comment } from '../../../../models/Comment';
import { State } from '../../../../state';
import { deleteCommentPostThunk } from '../../../../thunk/PostShowThunks';

interface IProps extends Comment {
}

interface TStateProps {
    authName: string;
    slug: string;
}

interface TDispatchProps {
    deleteCommentPost: (slug: string, commentId: number) => void;
}

class CommentComponent extends Component<IProps & TDispatchProps & TStateProps> {
    deleteComment = () => this.props.deleteCommentPost(this.props.slug, this.props.id);

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <p className="card-text">{this.props.body}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/${this.props.author?.username}`} className="comment-author">
                        <img src={this.props.author.image} className="comment-author-img" alt="" />
                    </Link>
                    <Link to={`/${this.props.author?.username}`} className="comment-author">
                        &nbsp;{this.props.author?.username}
                    </Link>
                    <span className="date-posted">{this.props.createdAt}</span>

                    {
                        this.props.authName === this.props.author.username &&
                        <span onClick={this.deleteComment} className="mod-options"><i className="ion-trash-a"></i></span>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps: MapStateToPropsParam<TStateProps, {}, State> = ({
    settings: { username: authName },
    postShow: { article: { slug } }
}) => ({ authName, slug });

const mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, {}> = (dispatch: any) => ({
    deleteCommentPost: (slug: string, commentId: number) => dispatch(deleteCommentPostThunk(slug, commentId)),
});
export default connect<TStateProps, TDispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(CommentComponent);