import React, { ChangeEvent, Component } from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToPropsParam } from 'react-redux';
import { Link } from 'react-router-dom';
import { SettingsState } from '../../../reducers/SettingsReducer';
import { State } from '../../../state';
import { logoutThunk, saveThunk } from '../../../thunk/SettingsThunks';

interface IDispatchProps {
    logout: () => void;
    save: (user: SettingsState) => void;
}

interface TStateProps {
    settings: SettingsState;
}

class Form extends Component<TStateProps & IDispatchProps, SettingsState> {

    handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            ...this.props.settings,
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        this.props.save(this.state)
        e.preventDefault();
    }

    render() {
        const { settings } = this.props;
        return (
            // TODO use formik
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <fieldset className='form-group'>
                        <input name="image" onChange={this.handleChange} defaultValue={settings.image} className='form-control' type='text' placeholder='URL of profile picture' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input name="username" onChange={this.handleChange} defaultValue={settings.username} className='form-control form-control-lg' type='text' placeholder='Username' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <textarea name="bio" onChange={this.handleChange} defaultValue={settings.bio} className='form-control form-control-lg' placeholder='Short bio about you' rows={8} />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input name="email" onChange={this.handleChange} defaultValue={settings.email} className='form-control form-control-lg' autoComplete='username' type='email' placeholder='Email' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input name="password" onChange={this.handleChange} defaultValue={settings.password} className='form-control form-control-lg' type='password' autoComplete='current-password' placeholder='New Password' />
                    </fieldset>

                    <Link onClick={this.props.logout} to="/" className="btn btn-lg btn-outline-danger">Logout</Link>
                    <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>Save</button>
                </fieldset>
            </form >
        )
    }
}

const mapStateToProps: MapStateToPropsParam<TStateProps, {}, State> = ({ settings }) => ({ settings });

const mapDispatchToProps: MapDispatchToPropsFunction<IDispatchProps, {}> = (dispatch: any) => ({
    logout: () => dispatch(logoutThunk()),
    save: (user: SettingsState) => dispatch(saveThunk(user)),
});

export default connect<TStateProps, IDispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(Form);
