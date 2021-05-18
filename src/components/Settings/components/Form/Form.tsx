import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <form>
                <fieldset>

                    <fieldset className='form-group'>
                        <input className='form-control' type='text' placeholder='URL of profile picture' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input className='form-control form-control-lg' type='text' placeholder='Username' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <textarea className='form-control form-control-lg' placeholder='Short bio about you' rows={8} />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input className='form-control form-control-lg' autoComplete='username' type='email' placeholder='Email' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input className='form-control form-control-lg' type='password' autoComplete='current-password' placeholder='New Password' />
                    </fieldset>

                    <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>Update Settings</button>
                </fieldset>
            </form>
        )
    }
}

export default Form
