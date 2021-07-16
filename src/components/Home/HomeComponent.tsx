import React, { Component } from 'react';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { fetchPostsThunk } from '../../thunk/PostsPreviewThunks';
import PostListComponent from '../PostList/PostListComponent';
import { BannerComponent } from './Banner/BannerComponent';

interface TDispatchProps {
  fetchPosts: () => void;
}

interface IProps extends TDispatchProps {
}

class HomeComponent extends Component<IProps> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <main className="home-page">
        <BannerComponent />

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
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
});

export default connect<{}, TDispatchProps, {}, {}>(null, mapDispatchToProps)(HomeComponent);