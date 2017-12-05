import Vue from 'vue'
import PeopleListItem from '@/components/PeopleListItem'

const testItem = {
  Id : 1,
  FirstName : 'Michael',
  LastName : 'Jordan',
  Country : 'United States',
  Gender : 'Male',
  Birthdate : '1963-02-17T00:00:00',
  FavoriteColor : 'Red'
}

describe('PeopleListItem', () => {
  it('should be show person full name', () => {
    const Constructor = Vue.extend(PeopleListItem)
    const PeopleListItemComponent = new Constructor({
      propsData: {
        item: testItem
      }
    }).$mount()

    const title = PeopleListItemComponent.$el.querySelector('.name')
    expect(title).to.exist
    expect(title.textContent).to.contains('Michael Jordan')
  })

  it('should have a delete button', () => {
    const Constructor = Vue.extend(PeopleListItem)
    const PeopleListItemComponent = new Constructor({
      propsData: {
        item: testItem
      }
    }).$mount()

    const deleteButton = PeopleListItemComponent.$el.querySelector('button')
    expect(deleteButton).to.exist
  })

  it('call delete person dialog function on click', () => {
    const spy = sinon.spy(PeopleListItem.methods, 'confirmDeletePerson')
    const Constructor = Vue.extend(PeopleListItem)
    const PeopleListItemComponent = new Constructor({
      propsData: {
        item: testItem
      }
    }).$mount()

    const deleteButton = PeopleListItemComponent.$el.querySelector('button')
    deleteButton.click()
    
    spy.should.have.been.calledOnce
  })
})
