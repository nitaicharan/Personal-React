import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Preview extends Component {
    render() {
        return (
            <div className="article-preview">
                <div className="article-meta">
                    <Link to="/profile">
                        <img src={'https://static.productionready.io/images/smiley-cyrus.jpg'} alt="{article.author.username}" />
                    </Link>

                    <div className="pull-xs-right">
                        <button className="btn btn-sm btn-primary"><i className="ion-heart"></i>&nbsp;?</button>
                    </div>
                </div>

                <Link to={`/article/2`} className="preview-link">
                    <h1>Title</h1>
                    <p>Description</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                        <li className="tag-default tag-pill tag-outline" key="{tag}">tag</li>
                    </ul>
                </Link>
            </div>
        )
    }
}

export default Preview
