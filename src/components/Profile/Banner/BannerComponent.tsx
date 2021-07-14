import React, { Component } from 'react';
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { ProfileState } from '../../../reducers/ProfileReducer';
import { State } from '../../../state';
import { fetchProfileThunk } from '../../../thunk/ProfileThunks';

interface IStateProps extends ProfileState {
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
        return (
            <section className="user-info">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <img src={this.props.image || 'https://static.productionready.io/images/smiley-cyrus.jpg'} className="user-img" alt="profile" />
                            <h4>{this.props.username}</h4>
                            <p>{this.props.bio}</p>

                            <Link to="/settings" className="btn btn-sm btn-outline-secondary action-btn ion-gear-a">&nbsp;Settings</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps: MapStateToPropsParam<IStateProps, {}, State> = ({ profile }) => ({ ...profile });
const mapDispatchToProps: MapDispatchToPropsParam<IDispatchProps, {}> = (dispatch: any) => ({
    fetchProfile: (username: string) => dispatch(fetchProfileThunk(username)),
});
export default withRouter(connect<IStateProps, IDispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(Banner));