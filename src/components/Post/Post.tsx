import React, { Component } from 'react'
import Form from './Form/Form'

class Post extends Component {
    render() {
        return (
            <>
                <main className='editor-page'>
                    <section className='container page'>
                        <div className='row'>
                            <div className='col-md-10 offset-md-1 col-xs-12'>
                                <Form />
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default Post
