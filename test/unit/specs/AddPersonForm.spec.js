import Vue from 'vue'
import AddPersonForm from '@/components/AddPersonForm'
import countries from '@/assets/countries'
import colors from '@/assets/colors'

describe('AddPersonForm', () => {
  it('should set correct default data', () => {
    expect(typeof AddPersonForm.data).to.equal('function')
    const defaultData = AddPersonForm.data()

    expect(defaultData.valid).to.be.false
    expect(defaultData.countries).to.equal(countries)
    expect(defaultData.colors).to.equal(colors)
    expect(defaultData.firstName).to.equal('')
    expect(defaultData.lastName).to.equal('')
    expect(defaultData.country).to.equal('')
    expect(defaultData.gender).to.equal('')
    expect(defaultData.birthdate).to.equal('')
    expect(defaultData.color).to.equal('')
  })

  it('should have all required input fields.', () => {
    const Constructor = Vue.extend(AddPersonForm)
    const AddPersonFormComponent = new Constructor().$mount()

    const firstNameField = AddPersonFormComponent.$el.querySelector('input[aria-label="First Name"]')
    expect(firstNameField).to.exist

    const lastNameField = AddPersonFormComponent.$el.querySelector('input[aria-label="Last Name"]')
    expect(lastNameField).to.exist

    const birthDateField = AddPersonFormComponent.$el.querySelector('input[aria-label="Birth Date"]')
    expect(birthDateField).to.exist
    
    const selectFields = AddPersonFormComponent.$el.querySelectorAll('.input-group--select label')
    expect(selectFields[0].textContent).to.equal('Country')
    expect(selectFields[1].textContent).to.equal('Gender')
    expect(selectFields[2].textContent).to.equal('Favorite Color')
  })
})
