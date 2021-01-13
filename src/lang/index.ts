import Vue from 'vue';
import VueI18n from 'vue-i18n';

import zh from './zh.json';
import tw from './tw.json';
import en from './en.json';
import store from '../store';
Vue.use(VueI18n);

export default new VueI18n({
    locale: store.state.language,
    messages: {
        'zh-cn': zh,
        'zh-tw': tw,
        en
    }
});
