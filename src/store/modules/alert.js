export default {
  state () {
    return {
      alert: null
    }
  },
  getters: {
    getAlert (state) {
      return state.alert
    }
  },
  mutations: {
    setAlert (state, options) {
      state.alert = {
        title: options.title,
        type: options.type,
        text: options.message
      }
    },
    resetAlert (state) {
      state.alert = null
    }
  }
}
