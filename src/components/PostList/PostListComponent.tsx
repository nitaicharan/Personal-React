import React, { Component } from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToPropsParam } from 'react-redux';
import { PostsPreviewState } from '../../reducers/PostsPreviewReducer';
import { State } from '../../state';
import { fetchPostsThunk } from '../../thunk/PostsPreviewThunks';
import PreviewComponent from './Preview/PreviewComponent';

interface IProps {
    fetchPostsThunk: () => void;
}

class PostListComponent extends Component<IProps & PostsPreviewState> {
    componentDidMount = () => this.props.fetchPostsThunk()

    render = () => (this.props.articles.map(i => <PreviewComponent key={i.slug} {...i} />));
}

const mapStateToProps: MapStateToPropsParam<PostsPreviewState, {}, State> = ({ postsPreview }) => ({ ...postsPreview });

const mapDispatchToProps: MapDispatchToPropsFunction<IProps, {}> = (dispatch: any) => ({
    fetchPostsThunk: () => dispatch(fetchPostsThunk()),
});

export default connect<PostsPreviewState, IProps, {}, State>(mapStateToProps, mapDispatchToProps)(PostListComponent);