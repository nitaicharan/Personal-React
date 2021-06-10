import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class TitleComponent extends Component {
    render() {
        return (
            <>
                <h1 className='text-xs-center'>Sign Up</h1>
                <p className="text-xs-center"><NavLink to="/signin">Have an account?</NavLink></p>
            </>
        )

    }
}