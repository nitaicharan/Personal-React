import React, { Component } from 'react'
import { Form } from './components/Form/Form'
import Title from './components/Title/Title'

export class Settings extends Component {
    render() {
        return (
            <>
                <Title />
                <Form />
            </>
        )
    }
}

export default Settings
