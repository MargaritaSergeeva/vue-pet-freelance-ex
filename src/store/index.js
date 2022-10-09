import { createStore } from 'vuex'
import tasks from './modules/tasks'
import alert from './modules/alert'

export default createStore({
  state () {
    return {
      isLoading: false
    }
  },
  getters: {
    getIsLoading (state) {
      return state.isLoading
    }
  },
  modules: {
    tasks,
    alert
  }
})
