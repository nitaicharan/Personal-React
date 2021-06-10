import React, { Component } from 'react';
import PostsPreviewComponent from '../PostsPreview/PostsPreviewComponent';
import { BannerComponent } from './Banner/BannerComponent';

class HomeComponent extends Component {
  render() {
    return (
      <main className="home-page">
        <BannerComponent />

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <PostsPreviewComponent />
            </div>
            <div className="col-md-3">Tags</div>
          </div>
        </div>
      </main>
    );
  }
}

export default HomeComponent;