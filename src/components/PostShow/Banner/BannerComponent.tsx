import React, { Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { Post } from '../../../models/Post';
import { State } from '../../../state';

interface IProps extends Post {
}

class BannerComponent extends Component<IProps> {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    <div className="article-meta">
                        <a href="nitaicharan">
                            <img src={this.props.author?.image} />
                        </a>
                        <div className="info">
                            <a className="author" href="nitaicharan">{this.props.author?.username}</a>
                            {/* TODO formate createdAt */}
                            <span className="date">{this.props.createdAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = (state) => ({ ...state.postShow.article });

export default connect(mapStateToProps)(BannerComponent);