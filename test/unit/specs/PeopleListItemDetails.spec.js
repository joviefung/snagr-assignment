import Vue from 'vue'
import PeopleListItemDetails from '@/components/PeopleListItemDetails'

const testItem = {
  Id : 1,
  FirstName : 'Michael',
  LastName : 'Jordan',
  Country : 'United States',
  Gender : 'Male',
  Birthdate : '1963-02-17T00:00:00',
  FavoriteColor : 'Red'
}

describe('PeopleListItemDetails', () => {
  it('should show person details', () => {
    const Constructor = Vue.extend(PeopleListItemDetails)
    const PeopleListItemDetailsComponent = new Constructor({
      propsData: {
        item: testItem
      }
    }).$mount()
    
    const details = PeopleListItemDetailsComponent.$el.querySelectorAll('.flex')
    expect(details[0].textContent).to.contains('United States')
    expect(details[1].textContent).to.contains('Male')
    expect(details[2].textContent).to.contains('1963')
    expect(details[3].textContent).to.contains('Red')
  })
})
