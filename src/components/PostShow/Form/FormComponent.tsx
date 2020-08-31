import React, { Component } from 'react'
import { connect, MapStateToPropsParam } from 'react-redux';
import { SettingsState } from '../../../reducers/SettingsReducer'
import { State } from '../../../state';

interface IProps extends SettingsState {
}

export class FormComponent extends Component<IProps> {
    render() {
        return (
            <>
                {
                    this.props.image &&
                    // TODO create a form component
                    <form className="card comment-form">
                        <div className="card-block">
                            <textarea className="form-control" placeholder="Write a comment..." rows={3}></textarea>
                        </div>
                        <div className="card-footer">
                            <img src={this.props.image} className="comment-author-img" />
                            {/* TODO add functionality to this button */}
                            <button className="btn btn-sm btn-primary" type="submit">Post Comment</button>
                        </div>
                    </form>
                }
            </>
        )
    }
}

const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = ({ settings }) => ({ ...settings, });

export default connect(mapStateToProps)(FormComponent);