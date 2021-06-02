import React, { ChangeEvent, Component, SyntheticEvent } from 'react';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { SignInState } from '../../../reducers/SignInReducer';
import { signInThunk } from '../../../thunk/SignInThunks';

interface IProps {
    signInThunk: (payload: SignInState) => void;
}
class Form extends Component<IProps, SignInState> {

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event: SyntheticEvent) => {
        this.props.signInThunk(this.state);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset className='form-group'>
                    <input onChange={this.handleChange} name="email" className='form-control form-control-lg' type='email' placeholder='Email' />
                </fieldset>

                <fieldset className='form-group'>
                    <input onChange={this.handleChange} name="password" className='form-control form-control-lg' type='password' placeholder='Password' />
                </fieldset>

                <button className='btn btn-lg btn-primary pull-xs-right' type="submit">Sign in</button>
            </form >
        )
    };
}

const mapDispatchToProps: MapDispatchToPropsFunction<IProps, {}> = (dispatch: any) => ({
    signInThunk: (payload: SignInState) => dispatch(signInThunk(payload)),
});

export default connect<{}, IProps, {}>(null, mapDispatchToProps)(Form);