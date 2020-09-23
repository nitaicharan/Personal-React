import React, { Component } from 'react'
import Banner from './Banner/Banner'
import List from './List/List'

class Profile extends Component {
    render() {
        return (
            <main className="profile-page">
                <Banner />
                <List />
            </main>
        )
    }
}

export default Profile
