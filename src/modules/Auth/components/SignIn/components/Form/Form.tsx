import React, { ChangeEvent, Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../../../../../redux/actions/Auth/SingInActions';
import { login } from '../../../../../../services/Auth/AuthService';

type IFormProps = {
    loginAction: (email: string, password: string) => void;
}

type IFormState = {
    email: string;
    password: string;
}

class Form extends Component<IFormProps, IFormState> {

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event: SyntheticEvent) => {
        const { loginAction } = this.props;
        const { email, password } = this.state;

        loginAction(email, password);
        login({ email, password }).then(console.log);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset className='form-group'>
                    <input onChange={e => this.handleChange(e)} name="email" className='form-control form-control-lg' type='email' autoComplete='username' placeholder='Email' />
                </fieldset>

                <fieldset className='form-group'>
                    <input onChange={e => this.handleChange(e)} name="password" className='form-control form-control-lg' type='password' autoComplete='current-password' placeholder='Password' />
                </fieldset>

                <button className='btn btn-lg btn-primary pull-xs-right' type="submit">Sign in</button>
            </form >
        )
    };
}

const mapDispatchToProps = (dispatch: any) => ({
    loginAction: (email: string, password: string) => dispatch(loginAction(email, password))
});

export default connect(null, mapDispatchToProps)(Form);