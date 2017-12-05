import Vue from 'vue'
import Fab from '@/components/Fab'

describe('Fab', () => {
  it('should be a button', () => {
    const Constructor = Vue.extend(Fab)
    const FabComponent = new Constructor().$mount()

    const fabButton = FabComponent.$el.querySelector('button')
    expect(fabButton).to.exist
  })

  it('call add person dialog function on click', () => {
    const spy = sinon.spy(Fab.methods, 'openAddPersonDialog')
    const Constructor = Vue.extend(Fab)
    const FabComponent = new Constructor().$mount()
    
    const fabButton = FabComponent.$el.querySelector('button')
    fabButton.click()
    
    spy.should.have.been.calledOnce
  })
})
