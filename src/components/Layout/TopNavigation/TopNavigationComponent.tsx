import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from '../../../components/Header/HeaderComponent';
import HomeComponent from '../../../components/Home/HomeComponent';
import PostNewComponent from '../../PostNew/PostNewComponent';
import ProfileComponent from '../../../components/Profile/ProfileComponent';
import SettingsComponent from '../../../components/Settings/SettingsComponent';
import { SignInComponent } from '../../../components/SignIn/SignInComponent';
import { SignUpComponent } from '../../../components/SignUp/SignUpComponent';
import PostShowComponent from '../../PostShow/PostShowComponent';
export class TopNavigationComponent extends Component {
    render() {
        return (
            <Router>
                <Route strict path="/" component={HeaderComponent} />
                <Switch>
                    <Route path="/signin" component={SignInComponent} />
                    <Route path="/signup" component={SignUpComponent} />
                    <Route path="/settings" component={SettingsComponent} />
                    <Route path="/profiles/:username" component={ProfileComponent} />
                    <Route path="/new" component={PostNewComponent} />
                    <Route path="/article/:slug" component={PostShowComponent} />
                    <Route path="/" component={HomeComponent} />
                </Switch>
            </Router>
        )
    }
}