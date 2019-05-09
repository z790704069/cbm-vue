import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cbm_login: window.sessionStorage.getItem('cbm_login') === null ? 'false' : 'true',
        cookieActive: "",
        user: {
            uid: window.sessionStorage.getItem('uid'),
            email: window.sessionStorage.getItem('email')
        }
    },
    mutations: {
        SET_UID(state, data) {
            state.user.uid = data;
            window.sessionStorage.setItem('uid', data);
        },
        SET_EMAIL(state, data) {
            state.user.email = data;
            window.sessionStorage.setItem('email', data);
        },
        SET_LOGIN_STATUS(state, data) {
            state.cbm_login = "true";
            window.sessionStorage.setItem('cbm_login', 'true');
        }
    }
})