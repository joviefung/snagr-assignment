import Vue from 'vue'
import DeleteConfirmDialog from '@/components/DeleteConfirmDialog'

const testItem = {
  Id : 1,
  FirstName : 'Michael',
  LastName : 'Jordan',
  Country : 'United States',
  Gender : 'Male',
  Birthdate : '1963-02-17T00:00:00',
  FavoriteColor : 'Red'
}

describe('DeleteConfirmDialog', () => {
  it('open dialog function should open dialog', () => {
    const Constructor = Vue.extend(DeleteConfirmDialog)
    const DeleteConfirmDialogComponent = new Constructor({
      propsData: {
        item: testItem
      }
    }).$mount()
    DeleteConfirmDialogComponent.openDialog()
    expect(DeleteConfirmDialogComponent.deleteConfirmDialog).to.be.true
  })
})
