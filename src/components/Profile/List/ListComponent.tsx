import React, { Component } from 'react';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { PostsPreviewState } from '../../../reducers/PostsPreviewReducer';
import { State } from '../../../state';
import { fetchPostsThunk } from '../../../thunk/PostsPreviewThunks';
import PostListComponent from '../../PostList/PostListComponent';

interface TDispatchProps {
    fetchPosts: (params?: PostsPreviewState) => void;
}

interface IProps extends TDispatchProps, RouteComponentProps<{ username: string }> {
}

class ListComponent extends Component<IProps> {

    componentDidMount() {
        // TODO dispatch filter to the store
        // TODO get filter in the store
        this.fetchPost({ author: this.props.match.params.username })
    }

    componentDidUpdate(prevProps: IProps) {
        // TODO dispatch filter to the store
        // TODO get filter in the store
        this.fetchPost({ author: this.props.match.params.username });
    }

    fetchPost(filter?: PostsPreviewState) {
        // TODO dispatch filter to the store
        // TODO get filter in the store
        this.props.fetchPosts(filter);
    }

    render() {
        return (
            <section className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <NavLink exact onClick={() => this.fetchPost({ author: this.props.match.params.username })} to={`${this.props.match.url}`} className="nav-link">Articles</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={() => this.fetchPost({ favorited: this.props.match.params.username })} to={`${this.props.match.url}/favorites`} className="nav-link">Favorited Articles</NavLink>
                                </li>
                            </ul>
                        </div>
                        <PostListComponent />
                    </div>
                </div>
            </section>
        );
    }
}

const mapDispatchToProps: MapDispatchToPropsFunction<TDispatchProps, {}> = (dispatch: any) => ({
    fetchPosts: (params?: PostsPreviewState) => dispatch(fetchPostsThunk(params)),
});
export default withRouter(connect<{}, TDispatchProps, {}, State>(null, mapDispatchToProps)(ListComponent));