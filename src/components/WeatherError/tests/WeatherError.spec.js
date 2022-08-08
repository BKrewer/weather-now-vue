import { shallowMount } from '@vue/test-utils'
import WeatherError from '@/components/WeatherError/WeatherError.vue'

describe('WeatherError.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(WeatherError)
    expect(wrapper.element).toMatchSnapshot();
  })
})