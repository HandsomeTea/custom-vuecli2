export interface RootState {
    loginStatus: boolean;
    language: string;
    menuHidden: boolean;
    screenType: 'phone' | 'ipad' | 'spc' | 'pc';
}

export interface UserState {
    username: string;
}

export interface ToogleSideAction {
    (): never;
}

export interface SetLanguageAction {
    (language: 'zh' | 'en'): never;
}