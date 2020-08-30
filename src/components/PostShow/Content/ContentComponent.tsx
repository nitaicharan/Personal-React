import React, { Component } from "react";
import { connect, MapStateToPropsParam } from "react-redux";
import { Post } from "../../../models/Post";
import { PostShowState } from "../../../reducers/PostShowReducer";
import { SettingsState } from "../../../reducers/SettingsReducer";
import { State } from "../../../state";
import CommentsComponent from "../Comments/CommentsComponent";

interface IProps extends PostShowState, SettingsState {
}

class ContentComponent extends Component<IProps> {
    render() {
        return (
            <>
                <div className="row article-content">
                    <div className="col-xs-12">
                        <div>
                            <p>{this.props.article?.body}</p>
                        </div>
                        <ul className="tag-list">
                        </ul>
                    </div>
                </div>
                <div className="article-actions"></div>
                <hr />
                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        {
                            this.props.image &&
                            /* TODO create a form component */
                            <form className="card comment-form">
                                <div className="card-block">
                                    <textarea className="form-control" placeholder="Write a comment..." rows={3}></textarea>
                                </div>
                                <div className="card-footer">
                                    <img src={this.props.image} className="comment-author-img" />
                                    <button className="btn btn-sm btn-primary" type="submit">Post Comment</button>
                                </div>
                            </form>
                        }
                        <CommentsComponent />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = ({ postShow, settings }) => ({
    ...postShow,
    ...settings
});

export default connect(mapStateToProps)(ContentComponent);