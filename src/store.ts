import Vue from 'vue';
import Vuex from 'vuex';
import { IUser } from '@/interfaces/user.interface.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    color: '#00ff00' as string,
    globalDate: new Date().toISOString().substr(0, 10) as string,
    users: [] as IUser[],
    spinner: 0,
    showError: false,
    errorText: '',
    errorTimer: 0,
  },

  mutations: {
    saveGlobalDate: (state, newValue) => {
      state.globalDate = newValue;
    },
    saveGlobalColor: (state, newValue) => {
      state.color = newValue;
    },
    setUsers: (state, userList: IUser[]) => {
      state.users = userList;
    },
    addUser: (state, user: IUser) => {
      state.users.push(user);
    },
    changeUser: (state, user: IUser) => {
      const users = state.users.map((usr: IUser) => {
        if (usr.id === user.id) {
          return {...user};
        } else {
          return usr;
        }
      });
      state.users = [...users];
    },
    spinnerIncrease: (state) => {
      state.spinner++;
    },
    spinnerDecrease: (state) => {
      state.spinner--;
    },

    setErrorState: (state,  error?) => {
      if (!error) {
        clearInterval(state.errorTimer);
        state.showError = false;
        state.errorText = '';
        return;
      }
      state.showError = true;
      state.errorText = error.message || '';
      clearInterval(state.errorTimer);
      state.errorTimer = setTimeout(() => {
        state.showError = false;
        state.errorText = '';
      }, 6000);
    },
  },
  actions: {
  },
  getters: {},
});
