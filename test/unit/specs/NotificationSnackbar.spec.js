import Vue from 'vue'
import Vuex from 'vuex'
import NotificationSnackbar from '@/components/NotificationSnackbar'

describe('NotificationSnackbar', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        notificationMsg: ''
      },
      mutations: {
        setNotificationMsg (state, notificationMsg) {
          state.notificationMsg = notificationMsg
        }
      }
   })
  })

  it('should show message according to state', done => {
    const Constructor = new Vue({      
      components: {
        NotificationSnackbar
      },
      template: '<NotificationSnackbar />',
      store: store
    })
    const NotificationSnackbarComponent = Constructor.$mount()

    const msg = NotificationSnackbarComponent.$el
    expect(msg.textContent).to.equal('')
    NotificationSnackbarComponent.$store.commit('setNotificationMsg', 'Test Message')

    Vue.nextTick()
      .then(() => {
        expect(msg.textContent).to.contains('Test Message')
        done()
      })
      .catch(done)
  })
})
