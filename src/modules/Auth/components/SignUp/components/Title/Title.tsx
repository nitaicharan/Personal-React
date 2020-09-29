import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Title extends Component {
    render() {
        return (
            <>
                <h1 className='text-xs-center'>Sign Up</h1>
                <p className="text-xs-center"><NavLink to="/login">Have an account?</NavLink></p>
            </>
        )

    }
}

export default Title
