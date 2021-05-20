import { AnyAction } from "redux";
import { SettingsConstants } from "../constants/SettingsConstants";

export type SettingsState = {
    bio: string;
    createdAt: Date;
    email: string;
    id: number
    image: string;
    token: string;
    updatedAt: Date;
    username: string;
    loading: boolean
}

const initValue: SettingsState = {
    bio: '',
    createdAt: new Date(),
    email: '',
    id: 0,
    image: '',
    token: '',
    updatedAt: new Date(),
    username: '',
    loading: false
}

export default function SettingsReducer(store = initValue, action: AnyAction): SettingsState {
    switch (action.type) {
        case SettingsConstants.SETTINGS:
            return { ...store, ...action.payload, loading: true };

        case SettingsConstants.SETTINGS_SUCCESS:
        case SettingsConstants.SETTINGS_FAILURE:
            return { ...store, loading: false };
        default:
            return store;
    }
};
