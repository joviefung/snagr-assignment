import Vue from 'vue'
import App from '@/App'

describe('App', () => {
  it('should have a create hook', () => {
    expect(typeof App.created).to.equal('function')
  })
})
