import { logoutAction } from './../actions/SettingsActions';
import { settingsAction } from "../actions/SettingsActions";
import { SettingsState } from "../reducers/SettingsReducer";
import { getSetting, removeSetting, saveSetting } from "../services/LocalStoreService";

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
        console.log(getSetting())
    }
};