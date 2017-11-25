import axios from 'axios'

const url = 'http://interviewtest.snagrweb.com/api/people'

export default {
  getPeopleList () {
    return axios.get(url)
  },
  addPersonOnServer (item) {
    return axios.post(url, item)
  },
  deletePersonOnServer (id) {
    return axios.delete(`${url}/${id}`)
  }
}
