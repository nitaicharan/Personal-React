import { SettingsState } from "../reducers/SettingsReducer";

const save = (params: { key: string, value: string }) => localStorage.setItem(params.key, params.value);
const get = (key: string) => localStorage.getItem(key);
const remove = (key: string) => localStorage.removeItem(key);

export const saveSetting = (state: SettingsState) => save({ key: 'SETTING', value: JSON.stringify(state) });
export const getSetting = () => parseToSetting(get('SETTING'));
export const removeSetting = () => remove('SETTING');

const parseToSetting = (setting: string | null) => setting ? JSON.parse(setting) : setting;