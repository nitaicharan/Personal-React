import React, { Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../../state';

interface IProps {
    username: string;
    bio: string;
    image: string;
}

class Banner extends Component<IProps> {
    render() {
        const { username, bio, image } = this.props;

        return (
            <section className="user-info">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <img src={image || 'https://static.productionready.io/images/smiley-cyrus.jpg'} className="user-img" alt="profile" />
                            <h4>{username}</h4>
                            <p>{bio}</p>

                            <Link to="/settings" className="btn btn-sm btn-outline-secondary action-btn ion-gear-a">&nbsp;Settings</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = (state: State) => ({
    username: state.settings.username,
    bio: state.settings.bio,
    image: state.settings.image,
})

export default connect<IProps, {}, {}, State>(mapStateToProps)(Banner);
