import ui from './modules/ui/index'
import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      ui,
    }
  })
};

export default createStore
