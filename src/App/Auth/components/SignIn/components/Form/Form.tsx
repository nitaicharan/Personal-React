import React from 'react';

type State = {
    email: string,
    password: string,
}
class Form extends React.Component<{}, State> {
    render() {
        const { email, password } = this.state;

        return (
            <form>
                <fieldset className='form-group'>
                    <input value={email} onChange={event => this.setState({ ...this.state, email: event.target.value })} className='form-control form-control-lg' type='email' autoComplete='username' placeholder='Email' />
                </fieldset>

                <fieldset className='form-group'>
                    <input value={password} onChange={event => this.setState({ ...this.state, password: event.target.value })} className='form-control form-control-lg' type='password' autoComplete='current-password' placeholder='Password' />
                </fieldset>

                <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>Sign in</button>
            </form >
        )
    }

}

export default Form;