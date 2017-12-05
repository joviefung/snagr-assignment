import Vue from 'vue'
import Vuex from 'vuex'
import AppToolbar from '@/components/AppToolbar'

describe('AppToolbar', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        sort: () => 'Id'
      }
    })
  })

  it('should have a title', () => {    
    const Constructor = new Vue({      
      components: {
        AppToolbar
      },
      template: '<AppToolbar />',
      store: store
    })
    const AppToolbarComponent = Constructor.$mount()

    const title = AppToolbarComponent.$el.querySelector('h1')
    expect(title.textContent).to.equal('People List')
  })
})
