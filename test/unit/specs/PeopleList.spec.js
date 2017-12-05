import Vue from 'vue'
import Vuex from 'vuex'
import PeopleList from '@/components/PeopleList'

describe('PeopleList', () => {
  let store
  let storeWithData

  beforeEach(() => {
    store = new Vuex.Store({
      getters: {
        processedPeopleList: () => null
      }
    })

    storeWithData = new Vuex.Store({
      getters: {
        processedPeopleList: () => [{
          "Id" : 1,
          "FirstName" : "Michael",
          "LastName" : "Jordan",
          "Country" : "United States",
          "Gender" : "Male",
          "Birthdate" : "1963-02-17T00:00:00",
          "FavoriteColor" : "Red"
        }]
      }
    })
  })

  it('should show loading spinner if list is null', () => {
    const Constructor = new Vue({      
      components: {
        PeopleList
      },
      template: '<PeopleList />',
      store: store
    })
    const PeopleListComponent = Constructor.$mount()
    const peopleList = PeopleListComponent.$el.querySelector('.expansion-panel')
    const loadingSpinner = PeopleListComponent.$el.querySelector('.loading')

    expect(peopleList).to.be.null
    expect(loadingSpinner).to.exist
  })
  
  it('should show people list if list is not null', () => {
    const Constructor = new Vue({      
      components: {
        PeopleList
      },
      template: '<PeopleList />',
      store: storeWithData
    })
    const PeopleListComponent = Constructor.$mount()
    const peopleList = PeopleListComponent.$el.querySelector('.expansion-panel')
    const loadingSpinner = PeopleListComponent.$el.querySelector('.loading')
    
    expect(peopleList).to.exist
    expect(loadingSpinner).to.be.null
  })
})
