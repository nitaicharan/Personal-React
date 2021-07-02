import React, { Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { Link } from 'react-router-dom';
import { Post } from '../../../models/Post';
import { State } from '../../../state';

interface IProps extends Post {
}

class BannerComponent extends Component<IProps> {
    noneImage = 'https://static.productionready.io/images/smiley-cyrus.jpg';

    render() {
        return (
            <div className="banner">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    <div className="article-meta">
                        {
                            this.props.author?.image &&
                            <Link to={`/${this.props.author?.username}`}>
                                <img src={this.props.author?.image || this.noneImage} alt="" />
                            </Link>
                        }
                        <div className="info">
                            <Link to={`/${this.props.author?.username}`} className="author">
                                {this.props.author?.username}
                            </Link>
                            {/* TODO formate createdAt */}
                            <span className="date">{this.props.createdAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = ({ postShow: { article } }) => ({ ...article });

export default connect(mapStateToProps)(BannerComponent);