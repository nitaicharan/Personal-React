import React, { ChangeEvent, Component, SyntheticEvent } from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToPropsParam } from 'react-redux';
import { SettingsState } from '../../../reducers/SettingsReducer';
import { State } from '../../../state';
import { addCommentPostThunk, deleteCommentPostThunk } from '../../../thunk/PostShowThunks';

interface IProps extends SettingsState {
}

interface IPropsThunk {
    addCommentPost: (body: string) => void;
    deleteCommentPost: (slug: string, commentId: number) => void;
}

interface IState {
    body: string;
}

export class FormComponent extends Component<IProps & IPropsThunk, IState> {

    onClickHandler = (e: SyntheticEvent) => {
        this.props.addCommentPost(this.state.body);
        e.preventDefault();
    }

    handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <>
                {
                    this.props.image &&
                    // TODO create a form component
                    <form className="card comment-form">
                        <div className="card-block">
                            <textarea name="body" onChange={this.handleChange} className="form-control" placeholder="Write a comment..." rows={3}></textarea>
                        </div>
                        <div className="card-footer">
                            <img src={this.props.image} className="comment-author-img" alt="" />
                            {/* TODO add functionality to this button */}
                            <button onClick={this.onClickHandler} className="btn btn-sm btn-primary" type="submit">Post Comment</button>
                        </div>
                    </form>
                }
            </>
        )
    }
}

const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = ({ settings }) => ({ ...settings, });
const mapDispatchToProps: MapDispatchToPropsFunction<IPropsThunk, {}> = (dispatch: any) => ({
    addCommentPost: (body: string) => dispatch(addCommentPostThunk(body)),
    deleteCommentPost: (slug: string, commentId: number) => dispatch(deleteCommentPostThunk(slug, commentId)),
});

export default connect<IProps, IPropsThunk, {}, State>(mapStateToProps, mapDispatchToProps)(FormComponent);