import React, { ChangeEvent, Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { SignInState } from '../../../../../../redux/reducers/Auth/SignInReducer';
import { signInThunk } from '../../../../../../redux/thunk';

type Props = {
    signInThunk: (payload: SignInState) => void;
}
class Form extends Component<Props, SignInState> {

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

const mapDispatchToProps = (dispatch: any) => ({
    signInThunk: (payload: SignInState) => dispatch(signInThunk(payload)),
});

export default connect(null, mapDispatchToProps)(Form);