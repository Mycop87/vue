import Vue from 'vue';
import Vuex from 'vuex';
import { UserService } from '@/services/user.service.ts';
import { IUser } from '@/interfaces/user.interface.ts';

Vue.use(Vuex);
const userService = new UserService();

export default new Vuex.Store({
  state:     {
    color:      '#00ff00' as string,
    globalDate: new Date().toISOString().substr(0, 10) as string,
    users:      [] as IUser[],
  },

  mutations: {
    saveGlobalDate:  (state, newValue) => {
      state.globalDate = newValue;
    },
    saveGlobalColor: (state, newValue) => {
      state.color = newValue;
    },
    setUsers:        (state, userList: IUser[]) => {
      state.users = userList;
    },
    addUser:         (state, user: IUser) => {
      state.users.push(user);
    },

  },
  actions:   {
    loadUsers: ({ commit }) => {
      userService.fetchUsers().then(({ data }) => {
        commit('setUsers', data);
      });
    },
  },
  getters:   {

  },
});
