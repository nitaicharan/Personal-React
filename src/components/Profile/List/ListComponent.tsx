import React, { Component } from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToPropsParam } from 'react-redux';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { Filter } from '../../../services/PostsPreviewService';
import { State } from '../../../state';
import { fetchPostsThunk } from '../../../thunk/PostsPreviewThunks';
import PostListComponent from '../../PostList/PostListComponent';

interface TStateProps {
    username: string
}

interface TDispatchProps {
    fetchPosts: (params: Filter) => void;
}

interface IProps extends TStateProps, TDispatchProps, RouteComponentProps<{ username: string }> {
}

class ListComponent extends Component<IProps & RouteComponentProps> {

    componentDidMount() {
        // TODO get filter in the store
        const { match, fetchPosts } = this.props;
        fetchPosts({ author: match.params.username });
    }

    render() {
        return (
            <section className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <NavLink exact to={`${this.props.match.url}`} className="nav-link">Articles</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`${this.props.match.url}/favorites`} className="nav-link">Favorited Articles</NavLink>
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

const mapStateToProps: MapStateToPropsParam<TStateProps, {}, State> = ({ settings }) => ({ username: settings.username })

const mapDispatchToProps: MapDispatchToPropsFunction<TDispatchProps, {}> = (dispatch: any) => ({
    fetchPosts: (params: Filter) => dispatch(fetchPostsThunk(params)),
});

export default withRouter(connect<TStateProps, TDispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(ListComponent));