import React, { ChangeEvent, Component } from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToPropsParam } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SettingsState } from '../../../reducers/SettingsReducer';
import { State } from '../../../state';
import { logoutThunk } from '../../../thunk/SettingsThunks';

interface IDispatchProps {
    logout: () => void;
}

interface TStateProps {
    settings: SettingsState;
}

class Form extends Component<TStateProps & IDispatchProps, SettingsState> {

    handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const { settings } = this.props;
        return (
            // TODO use formik
            <form>
                <fieldset>
                    <fieldset className='form-group'>
                        <input onChange={this.handleChange} defaultValue={settings.image} className='form-control' type='text' placeholder='URL of profile picture' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input onChange={this.handleChange} defaultValue={settings.username} className='form-control form-control-lg' type='text' placeholder='Username' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <textarea onChange={this.handleChange} defaultValue={settings.bio} className='form-control form-control-lg' placeholder='Short bio about you' rows={8} />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input onChange={this.handleChange} defaultValue={settings.email} className='form-control form-control-lg' autoComplete='username' type='email' placeholder='Email' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input onChange={this.handleChange} defaultValue={settings.password} className='form-control form-control-lg' type='password' autoComplete='current-password' placeholder='New Password' />
                    </fieldset>


                    <NavLink onClick={this.props.logout} to="/" className="btn btn-outline-danger">Logout</NavLink>
                    <button className='btn btn-primary pull-xs-right' type='submit'>Save</button>
                </fieldset>
            </form >
        )
    }
}

const mapStateToProps: MapStateToPropsParam<TStateProps, {}, State> = ({ settings }) => ({ settings });

const mapDispatchToProps: MapDispatchToPropsFunction<IDispatchProps, {}> = (dispatch: any) => ({
    logout: () => dispatch(logoutThunk())
});

export default connect<TStateProps, IDispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(Form);
