import React, { Component } from 'react'
import FormComponent from './Form/FormComponent'

class PostComponent extends Component {
    render() {
        return (
            <>
                <main className='editor-page'>
                    <section className='container page'>
                        <div className='row'>
                            <div className='col-md-10 offset-md-1 col-xs-12'>
                                <FormComponent />
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default PostComponent
