import React, { Component } from 'react'
import { BannerComponent } from '../Home/Banner/BannerComponent'
import ListComponent from './List/ListComponent'

class ProfileComponent extends Component {
    render() {
        return (
            <main className="profile-page">
                <BannerComponent />
                <ListComponent />
            </main>
        )
    }
}

export default ProfileComponent
