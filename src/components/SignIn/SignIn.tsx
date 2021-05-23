import React, { Component } from 'react'
import Form from './Form/Form'
import Title from './Title/Title'

export class SignIn extends Component {
    render() {
        return (
            <>
                <main className='auth-page'>
                    <section className='container page'>
                        <div className='row'>
                            <div className='col-md-6 offset-md-3 col-xs-12'>
                                <Title />
                                <Form />
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default SignIn
