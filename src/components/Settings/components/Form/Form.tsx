import React, { ChangeEvent, Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { SettingsState } from '../../../../reducers/SettingsReducer';
import { State } from '../../../../store';

interface IProps {
    settings: SettingsState;
}

class Form extends Component<IProps, SettingsState> {
    handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const { settings } = this.props;
        return (
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

                    <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>Update Settings</button>
                </fieldset>
            </form>
        )
    }
}

const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = (state: State) => ({
    settings: state.settings
});

export default connect<IProps, {}, {}, State>(mapStateToProps)(Form);
