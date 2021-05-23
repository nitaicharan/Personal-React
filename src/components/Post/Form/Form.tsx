import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <form>
                <fieldset>

                    <fieldset className='form-group'>
                        <input className='form-control form-control-lg' type='text' placeholder='Article Title' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input className='form-control' type='text' placeholder="What's this article about?" />
                    </fieldset>

                    <fieldset className='form-group'>
                        <textarea className='form-control' rows={8} placeholder='Write your article (in markdown)' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input className='form-control' type='text' placeholder='Enter tags' />
                    </fieldset>

                    <button className='btn btn-lg pull-xs-right btn-primary' type='button'>Publish Article</button>
                </fieldset>
            </form>
        )
    }
}

export default Form
