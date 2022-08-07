import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(AppHeader)
    expect(wrapper.element).toMatchSnapshot();
  })
})