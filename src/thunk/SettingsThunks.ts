import { saveAction, saveSuccessAction, settingsAction } from "../actions/SettingsActions";
import { SettingsState } from "../reducers/SettingsReducer";
import { removeSetting, saveSetting } from "../services/LocalStoreService";
import { update } from "../services/SettingsService";
import { State } from "../state";
import { logoutAction } from './../actions/SettingsActions';

export const settingsThunk = (state: SettingsState) => {
    return (dispatch: any) => {
        dispatch(settingsAction(state));
        saveSetting(state);
    }
};

export const logoutThunk = () => {
    return (dispatch: any) => {
        dispatch(logoutAction());
        removeSetting();
    }
};

export const saveThunk = (user: SettingsState) => {
    return (dispatch: any, getState: () => State) => {
        const { settings } = getState();
        dispatch(saveAction())
        update({ token: settings.token, user }).then(({ data }) => dispatch(saveSuccessAction(data.user)));
    }
};