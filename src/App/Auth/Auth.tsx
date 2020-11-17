import React, { Component } from 'react'

export class Auth extends Component {
    render() {
        return (
            <main className='auth-page'>
                <section className='container page'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3 col-xs-12'>

                            <h1 className='text-xs-center'>Sign Up</h1>
                            <p className="text-xs-center"><a href="#">Have an account?</a></p>


                            <form>
                                <fieldset>
                                    <fieldset className='form-group'>
                                        <input className='form-control form-control-lg' type='text' placeholder='Username' />
                                    </fieldset>

                                    <fieldset className='form-group'>
                                        <input className='form-control form-control-lg' type='email' autoComplete='username' placeholder='Email' />
                                    </fieldset>

                                    <fieldset className='form-group'>
                                        <input className='form-control form-control-lg' type='password' autoComplete='current-password' placeholder='Password' />
                                    </fieldset>

                                    <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>Sign up</button>
                                </fieldset>
                            </form>

                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Auth
