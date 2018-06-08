import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Value: Boop! Previous Value:  Example'
    const wrapper = shallowMount(Home, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})