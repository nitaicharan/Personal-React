import React, { Component } from "react";
import { connect, MapStateToPropsParam } from "react-redux";
import { Post } from "../../../models/Post";
import { PostShowState } from "../../../reducers/PostShowReducer";
import { SettingsState } from "../../../reducers/SettingsReducer";
import { State } from "../../../state";

interface IProps {
    postShow: PostShowState;
    settings: SettingsState;
}

class ContentComponent extends Component<IProps> {
    render() {
        return (
            <>
                <div className="row article-content">
                    <div className="col-xs-12">
                        <div>
                            <p>{this.props.postShow.article?.body}</p>
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
                            this.props.settings.image &&
                            /* TODO create a form component */
                            <form className="card comment-form">
                                <div className="card-block">
                                    <textarea className="form-control" placeholder="Write a comment..." rows={3}></textarea>
                                </div>
                                <div className="card-footer">
                                    <img src={this.props.settings?.image} className="comment-author-img" />
                                    <button className="btn btn-sm btn-primary" type="submit">Post Comment</button>
                                </div>
                            </form>
                        }
                        {/* TODO create a comments component */}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = (state) => ({ ...state.postShow, ...state });

export default connect(mapStateToProps)(ContentComponent);