import { AnyAction } from "redux";
import { SettingsConstants } from "../constants/SettingsConstants";
import { SettingsState } from "../reducers/SettingsReducer";

export const settingsAction = (payload: SettingsState): AnyAction => ({
    type: SettingsConstants.SETTINGS,
    payload,
});

export const settingsSuccessAction = (): AnyAction => ({
    type: SettingsConstants.SETTINGS_SUCCESS,
});

export const settingsFailureAction = (): AnyAction => ({
    type: SettingsConstants.SETTINGS_FAILURE,
});