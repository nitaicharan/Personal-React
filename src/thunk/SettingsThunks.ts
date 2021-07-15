import { settingsAction } from "../actions/SettingsActions";
import { SettingsState } from "../reducers/SettingsReducer";
import { saveSetting } from "../services/LocalStoreService";

export const createSettingThunk = (state: SettingsState) => {
    return (dispatch: any) => {
        dispatch(settingsAction(state));
        saveSetting(state);
    }
};