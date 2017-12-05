import { mutations } from '@/store/store'

describe('store', () => {
  it('setPeopleList', () => {
    const { setPeopleList } = mutations
    const state = { 
      peopleList: []
    }
    const mockItem = [{
      Id : 1,
      FirstName : 'Michael',
      LastName : 'Jordan',
      Country : 'United States',
      Gender : 'Male',
      Birthdate : '1963-02-17T00:00:00',
      FavoriteColor : 'Red'
    }]

    setPeopleList(state, mockItem)
    expect(state.peopleList).to.eql([{
      Id : 1,
      FirstName : 'Michael',
      LastName : 'Jordan',
      Country : 'United States',
      Gender : 'Male',
      Birthdate : '1963-02-17T00:00:00',
      FavoriteColor : 'Red', 
      isExpand: false
    }])
  }),

  it('setNotificationMsg', () => {
    const { setNotificationMsg } = mutations
    const state = { 
      notificationMsg: ''
    }
    const mockMsg = 'Test Message'

    setNotificationMsg(state, mockMsg)
    expect(state.notificationMsg).to.equal(mockMsg)
  })
})