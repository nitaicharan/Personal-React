import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <fieldset className='form-group'>
                            <input className='form-control form-control-lg' type='email' autoComplete='username' placeholder='Email' />
                        </fieldset>

                        <fieldset className='form-group'>
                            <input className='form-control form-control-lg' type='password' autoComplete='current-password' placeholder='Password' />
                        </fieldset>

                        <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>Sign in</button>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default Form
