import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component<{ form: any }> {
    render() {
        const { email, password } = this.props.form;

        return (
            <form>
                <fieldset className='form-group'>
                    <input value={email} className='form-control form-control-lg' type='email' autoComplete='username' placeholder='Email' />
                </fieldset>

                <fieldset className='form-group'>
                    <input value={password} className='form-control form-control-lg' type='password' autoComplete='current-password' placeholder='Password' />
                </fieldset>

                <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>Sign in</button>
            </form >
        )
    };
}

const mapStateToProps = (state: any) => ({ form: state.SingUp });
const mapDispatchToProps = null;
export default connect(mapStateToProps)(Form);