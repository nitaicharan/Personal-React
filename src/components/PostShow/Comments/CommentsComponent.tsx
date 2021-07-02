import React, { Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { Comment } from '../../../models/Comment';
import { State } from '../../../state';
import CommentComponent from './Comment/CommentComponent';

interface IProps {
    comments: Comment[];
    slug: string;
    authorUsername: string;
}

class CommentsComponent extends Component<IProps> {
    render() {
        return (
            <>
                {this.props.comments?.map(i => <CommentComponent {...i} slug={this.props.slug} authorUsername={this.props.authorUsername} key={i.id} />)}
            </>
        );
    }
}

const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = ({ postShow: { comments, article }, settings: { username: authorUsername } }) => ({ comments, slug: article?.slug, authorUsername });

export default connect<IProps, {}, {}, State>(mapStateToProps)(CommentsComponent);