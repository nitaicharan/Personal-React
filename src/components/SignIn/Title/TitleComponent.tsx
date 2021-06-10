import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class TitleComponent extends Component {
    render() {
        return (
            <>
                <h1 className='text-xs-center'>Sign In</h1>
                <p className="text-xs-center"><NavLink to="/signup">Need an account?</NavLink></p>
            </>
        )

    }
}