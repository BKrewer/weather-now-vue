import { shallowMount } from '@vue/test-utils'
import AppLoading from '@/components/AppLoading/AppLoading.vue'

describe('AppLoading.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(AppLoading)
    expect(wrapper.element).toMatchSnapshot();
  })
})