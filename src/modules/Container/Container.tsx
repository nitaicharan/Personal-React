import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

export class Container extends Component {
    render() {
        return (
            <main className='auth-page'>
                <section className='container page'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3 col-xs-12'>
                            <Router>
                                <Switch>
                                    <Route path="/signin" component={SignIn} />
                                    <Route path="/signup" component={SignUp} />
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Container
