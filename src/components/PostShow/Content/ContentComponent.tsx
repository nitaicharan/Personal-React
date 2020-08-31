import React, { Component } from "react";
import { connect, MapStateToPropsParam } from "react-redux";
import { Post } from "../../../models/Post";
import { PostShowState } from "../../../reducers/PostShowReducer";
import { SettingsState } from "../../../reducers/SettingsReducer";
import { State } from "../../../state";
import CommentsComponent from "../Comments/CommentsComponent";
import FormComponent from "../Form/FormComponent";

interface IProps extends PostShowState {
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
                        <FormComponent />
                        <CommentsComponent />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = ({ postShow }) => ({ ...postShow, });

export default connect(mapStateToProps)(ContentComponent);