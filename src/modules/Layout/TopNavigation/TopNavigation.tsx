import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Post from '../../../components/Post/Post';
import Settings from '../../../components/Settings/Settings';
import SignIn from '../../../components/SignIn/SignIn';
import SignUp from '../../../components/SignUp/SignUp';
export class TopNavigation extends Component {
    render() {
        return (
            <Router>
                <Route strict path="/" component={Header} />
                <Switch>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/new" component={Post} />
                </Switch>
            </Router>
        )
    }
}

export default TopNavigation;
