import React, { Component } from 'react';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { Link } from 'react-router-dom';
import { Post } from '../../../models/Post';
import { toggleFavoritePostThunk } from '../../../thunk/PreviewThunks';

export interface IProps {
    toggleFavoritePost: (slug: string) => void;
}

class Preview extends Component<IProps & Post> {
    toggleFavoriteClass = (): string => this.props.favorited ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-primary';

    render() {
        return (
            <div className="article-preview">
                <div className="article-meta">
                    <Link to={`/${this.props.author.username}`}>
                        <img src={this.props.author.image || 'https://static.productionready.io/images/smiley-cyrus.jpg'} alt={this.props.author.username} />
                    </Link>

                    <div className="info">
                        <Link className="author" to={`/${this.props.author.username}`}>{this.props.author.username}</Link>
                        <span className="date">{new Date(this.props.createdAt).toDateString()}</span>
                    </div>
                    <div className="pull-xs-right">
                        <button onClick={() => this.props.toggleFavoritePost(this.props.slug)} className={this.toggleFavoriteClass()}><i className="ion-heart"></i> {this.props.favoritesCount}</button>
                    </div>
                </div>

                <Link to={`/article/${this.props.slug}`} className="preview-link">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <span>Read more...</span>
                    <ul className="tag-list">{this.props.tagList.map(tag => <li className="tag-default tag-pill tag-outline" key={tag}>{tag}</li>)}</ul>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps: MapDispatchToPropsFunction<IProps, {}> = (dispatch: any) => ({
    toggleFavoritePost: (slung: string) => dispatch(toggleFavoritePostThunk(slung)),
});
export default connect<{}, IProps, {}>(null, mapDispatchToProps)(Preview);