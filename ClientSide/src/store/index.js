import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';

const store = createStore({
  state() {
    return {
      titles: [],
      questions: [],
      report: {},
    };
  },
  actions,
  mutations,
});

export default store;
