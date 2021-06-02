import React, { Component } from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToPropsParam } from 'react-redux';
import { PostsPreviewState } from '../../reducers/PostsPreview';
import { State } from '../../store';
import { fetchPostsThunk } from '../../thunk/PostsPreviewThunks';
import Preview from './Preview/Preview';

interface IProps {
    fetchPostsThunk: () => void;
}

class PostsPreview extends Component<IProps & PostsPreviewState> {
    componentDidMount = () => this.props.fetchPostsThunk()

    render = () => (this.props.articles.map(i => <Preview {...i} />));
}

const mapStateToProps: MapStateToPropsParam<PostsPreviewState, {}, State> = ({ postsPreview }) => ({ ...postsPreview });

const mapDispatchToProps: MapDispatchToPropsFunction<IProps, {}> = (dispatch: any) => ({
    fetchPostsThunk: () => dispatch(fetchPostsThunk()),
});

export default connect<PostsPreviewState, IProps, {}, State>(mapStateToProps, mapDispatchToProps)(PostsPreview);