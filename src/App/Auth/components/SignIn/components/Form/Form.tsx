import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../../../../../redux/actions/Auth/SingInActions';

class Form extends React.Component<{ form: any }> {
    render() {
        const { email, password, login } = this.props.form;

        return (
            <form>
                <fieldset className='form-group'>
                    <input  defaultValue={email} className='form-control form-control-lg' type='email' autoComplete='username' placeholder='Email' />
                </fieldset>

                <fieldset className='form-group'>
                    <input  defaultValue={password} className='form-control form-control-lg' type='password' autoComplete='current-password' placeholder='Password' />
                </fieldset>

                <button className='btn btn-lg btn-primary pull-xs-right' type='submit' onClick={() => login(email, password)}>Sign in</button>
            </form >
        )
    };
}

const mapStateToProps = (state: any) => ({ form: state.SingUp });
const mapDispatchToProps = (dispatch: any) => ({ login: (email: string, password: string) => dispatch(loginAction(email, password)) });
export default connect(mapStateToProps, mapDispatchToProps)(Form);