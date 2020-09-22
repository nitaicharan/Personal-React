import React, { ChangeEvent, Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { signUpAction } from '../../../../../../redux/actions/Auth/SignUpActions';
import { SignUpState } from '../../../../../../redux/reducers/Auth/SignUpReducer';
import { signIn } from '../../../../../../services/Auth/SignInService';

type Props = {
    signUpAction: (payload: SignUpState) => void;
}
class Form extends Component<Props, SignUpState> {

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event: SyntheticEvent) => {
        const { signUpAction } = this.props;
        signUpAction(this.state);
        signIn(this.state).then(console.log);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <fieldset className='form-group'>
                        <input onChange={e => this.handleChange(e)} className='form-control form-control-lg' type='text' name='username' placeholder='Username' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input onChange={e => this.handleChange(e)} className='form-control form-control-lg' type='email' name='email' placeholder='Email' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input onChange={e => this.handleChange(e)} className='form-control form-control-lg' type='password' name='password' placeholder='Password' />
                    </fieldset>

                    <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>Sign up</button>
                </fieldset>
            </form>
        )
    };
}

const mapDispatchToProps = (dispatch: any) => ({
    signUpAction: (payload: SignUpState) => dispatch(signUpAction(payload))
});

export default connect(null, mapDispatchToProps)(Form);