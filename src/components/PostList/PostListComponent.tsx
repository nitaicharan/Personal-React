import React, { Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { PostsPreviewState } from '../../reducers/PostsPreviewReducer';
import { State } from '../../state';
import PreviewComponent from './Preview/PreviewComponent';

class PostListComponent extends Component<PostsPreviewState> {
    render = () => (this.props.articles.map(i => <PreviewComponent key={i.slug} {...i} />));
}

const mapStateToProps: MapStateToPropsParam<PostsPreviewState, {}, State> = ({ postsPreview }) => ({ ...postsPreview });

export default connect<PostsPreviewState, {}, {}, State>(mapStateToProps)(PostListComponent);