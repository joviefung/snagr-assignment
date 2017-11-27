import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../services/apiService'

Vue.use(Vuex)

const dynamicSort = (property) => {
  return (a, b) => {
    if (a[property] > b[property]) return 1
    if (a[property] < b[property]) return -1
    else return 0
  }
}

export default new Vuex.Store({
  state: {
    peopleList: null,
    notificationMsg: '',
    isLoading: false,
    sort: ''
  },
  getters: {
    sortedPeopleList: state => {
      if (state.peopleList === null) {
        return null
      }
      switch (state.sort) {
        case 'Id':
        case 'FirstName':
        case 'LastName':
        case 'Country':
        case 'Gender':
        case 'FavoriteColor': {
          return state.peopleList.sort(dynamicSort(state.sort))
        }
        case 'Birthdate': {
          return state.peopleList.sort((a, b) => {
            let [ayear, amonth, aday] = a.Birthdate.split('T')[0].split('-')
            let [ahour, aminute, asecond] = a.Birthdate.split('T')[1].split(':')
            let [byear, bmonth, bday] = b.Birthdate.split('T')[0].split('-')
            let [bhour, bminute, bsecond] = b.Birthdate.split('T')[1].split(':')
            let aDate = new Date(ayear, amonth, aday, ahour, aminute, asecond)
            let bDate = new Date(byear, bmonth, bday, bhour, bminute, bsecond)

            if (aDate > bDate) return 1
            if (aDate < bDate) return -1
            else return 0
          })
        }
        default: {
          return state.peopleList
        }
      }
    }
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
    },
    updateSort (state, value) {
      state.sort = value
    }
  }
})
