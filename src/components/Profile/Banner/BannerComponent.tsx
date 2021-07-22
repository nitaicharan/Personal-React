import React, { Component } from 'react';
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { ProfileState } from '../../../reducers/ProfileReducer';
import { SettingsState } from '../../../reducers/SettingsReducer';
import { State } from '../../../state';
import { fetchProfileThunk } from '../../../thunk/ProfileThunks';

interface IStateProps extends ProfileState {
    settings: SettingsState
}

interface IDispatchProps {
    fetchProfile: (username: string) => void;
}

interface IProps extends RouteComponentProps<{ username: string }>, IStateProps, IDispatchProps {
}

class Banner extends Component<IProps> {

    componentDidMount() {
        this.props.fetchProfile(this.props.match.params.username);
    }

    render() {
        const usernameSetting = this.props.settings.username;
        const usernameParams = this.props.username;
        return (
            <section className="user-info">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <img src={this.props.image || 'https://static.productionready.io/images/smiley-cyrus.jpg'} className="user-img" alt="profile" />
                            <h4>{this.props.username}</h4>
                            <p>{this.props.bio}</p>

                            {
                                usernameSetting !== usernameParams ?
                                    <Link to="/settings">{
                                        this.props.following ?
                                            <i className="btn btn-sm btn-outline-secondary action-btn ion-minus-round">&nbsp;Unfollow</i> :
                                            <i className="btn btn-sm btn-outline-secondary action-btn ion-plus-round">&nbsp;Follow</i>
                                    }</Link> :
                                    <Link to="/settings"><i className="btn btn-sm btn-outline-secondary action-btn ion-gear-a">&nbsp;Settings</i></Link>
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps: MapStateToPropsParam<IStateProps, {}, State> = ({ profile, settings }) => ({ ...profile, settings });
const mapDispatchToProps: MapDispatchToPropsParam<IDispatchProps, {}> = (dispatch: any) => ({
    fetchProfile: (username: string) => dispatch(fetchProfileThunk(username)),
});
export default withRouter(connect<IStateProps, IDispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(Banner));