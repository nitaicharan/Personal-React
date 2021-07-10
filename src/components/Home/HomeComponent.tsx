import React, { Component } from 'react';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchFeedsThunk, fetchPostsThunk } from '../../thunk/PostsPreviewThunks';
import PostListComponent from '../PostList/PostListComponent';
import { BannerComponent } from './Banner/BannerComponent';

interface TDispatchProps {
  fetchPosts: () => void;
  fetchFeeds: () => void;
}

interface IProps extends TDispatchProps {
}

class HomeComponent extends Component<IProps> {
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    this.props.fetchPosts();
  }

  fetchFeeds = () => {
    this.props.fetchFeeds();
  }


  render() {
    return (
      <main className="home-page">
        <BannerComponent />
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <NavLink onClick={this.fetchPosts} exact to="" className="nav-link">Global Feed</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick={this.fetchFeeds} to="feeds" className="nav-link">Your Feed</NavLink>
                  </li>
                </ul>
              </div>
              <PostListComponent />
            </div>
            <div className="col-md-3">Tags</div>
          </div>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<TDispatchProps, {}> = (dispatch: any) => ({
  fetchPosts: () => dispatch(fetchPostsThunk()),
  fetchFeeds: () => dispatch(fetchFeedsThunk()),
});

export default connect<{}, TDispatchProps, {}, {}>(null, mapDispatchToProps)(HomeComponent);