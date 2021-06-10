import React, { Component } from 'react'
import FormComponent from './Form/FormComponent'
import TitleComponent from './Title/TitleComponent'

class SettingsComponent extends Component {
    render() {
        return (
            <>
                <main className='settings-page'>
                    <section className='container page'>
                        <div className='row'>
                            <div className='col-md-6 offset-md-3 col-xs-12'>
                                <TitleComponent />
                                <FormComponent />
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default SettingsComponent
