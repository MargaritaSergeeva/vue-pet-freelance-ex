import axios from 'axios'

export default {
  state () {
    return {
      tasks: []
    }
  },
  getters: {
    getTasks (state) {
      return state.tasks
    },
    getTasksCount (state) {
      return state.tasks.length
    },
    getActiveTasksCount (state) {
      return state.tasks.filter(task => task.status === 'active').length
    },
    getTaskById: (state, getters) => (id) => {
      return getters.getTasks.find(task => task.id === id)
    },
    getFilteredTasks: (state, getters) => (status) => {
      return getters.getTasks.filter(task => task.status === status)
    }
  },
  mutations: {
    setTasks (state, loadedTasks) {
      state.tasks = loadedTasks
    },
    addNewTask (state, payload) {
      state.tasks.push({
        id: payload.id,
        ...payload.task
      })
    },
    changeTask (state, task) {
      const editedTaskIndex = state.tasks.findIndex(t => t.id === task.id)
      state.tasks.splice(editedTaskIndex, 1, task)
    }
  },
  actions: {
    async loadAllTasks ({ commit, rootState }) {
      rootState.isLoading = true
      try {
        const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/tasks-list.json`)
        const loadedTasks = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
        commit('setTasks', loadedTasks)
      } catch (e) {
        commit('setAlert', { title: 'Ошибка!', type: 'danger', message: e.message })
      } finally {
        rootState.isLoading = false
      }
    },
    async createNewTask ({ commit, state }, task) {
      try {
        const { data } = await axios.post(process.env.VUE_APP_API_URL + '/tasks-list.json', task)
        commit('addNewTask', { id: data.name, task })
      } catch (e) {
        commit('setAlert', { title: 'Ошибка!', type: 'danger', message: e.message })
      }
    },
    async editTask ({ commit, state }, task) {
      try {
        const { id, ...rest } = task
        await axios.put(process.env.VUE_APP_API_URL + `/tasks-list/${id}.json`, rest)
        commit('changeTask', task)
      } catch (e) {
        commit('setAlert', { title: 'Ошибка!', type: 'danger', message: e.message })
      }
    }
  }
}
