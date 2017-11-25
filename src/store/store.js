import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../services/apiService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peopleList: null,
    notificationMsg: '',
    isLoading: false
  },
  mutations: {
    setPeopleList (state, newList) {
      state.peopleList = newList
    },
    deletePerson (state, id) {
      state.isLoading = true
      ApiService.deletePersonOnServer(id)
        .then(() => {
          state.peopleList = state.peopleList.filter(item => item.Id !== id)
          state.notificationMsg = 'Delete Successfully'
          state.isLoading = false
        })
        .catch(err => {
          state.notificationMsg =
            `Error ${err.response.status} (${err.response.statusText}): 
             ${err.response.data.Message}`
          state.isLoading = false
        })
    },
    addPerson (state, person) {
      state.isLoading = true
      ApiService.addPersonOnServer(person)
        .then(res => {
          state.peopleList.push(res.data)
          state.notificationMsg = `Add Successfully - New Person ID: ${res.data.Id}`
          state.isLoading = false
        })
        .catch(err => {
          state.notificationMsg =
            `Error ${err.response.status} (${err.response.statusText}): 
             ${err.response.data.Message}`
          state.isLoading = false
        })
    },
    setNotificationMsg (state, notificationMsg) {
      state.notificationMsg = notificationMsg
    }
  }
})
