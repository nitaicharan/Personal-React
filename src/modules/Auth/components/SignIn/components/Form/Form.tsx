import React, { ChangeEvent, Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { signInAction } from '../../../../../../redux/actions/Auth/SignInActions';
import { SignInState } from '../../../../../../redux/reducers/Auth/SignInReducer';
import { signIn } from '../../../../../../services/Auth/SignInService';

type Props = {
    signInAction: (payload: SignInState) => void;
}
class Form extends Component<Props, SignInState> {

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event: SyntheticEvent) => {
        const { signInAction } = this.props;
        signInAction(this.state);
        signIn(this.state).then(console.log);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset className='form-group'>
                    <input onChange={e => this.handleChange(e)} name="email" className='form-control form-control-lg' type='email' placeholder='Email' />
                </fieldset>

                <fieldset className='form-group'>
                    <input onChange={e => this.handleChange(e)} name="password" className='form-control form-control-lg' type='password' placeholder='Password' />
                </fieldset>

                <button className='btn btn-lg btn-primary pull-xs-right' type="submit">Sign in</button>
            </form >
        )
    };
}

const mapDispatchToProps = (dispatch: any) => ({
    signInAction: (payload: SignInState) => dispatch(signInAction(payload))
});

export default connect(null, mapDispatchToProps)(Form);