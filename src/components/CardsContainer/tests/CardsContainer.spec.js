import { createStore } from 'vuex'
import { shallowMount } from '@vue/test-utils'
import CardsContainer from '@/components/CardsContainer/CardsContainer.vue'
import WeatherCard from '@/components/WeatherCard/WeatherCard.vue'

const store = createStore({
    actions: {
        requestWeatherData: jest.fn(),
    },
    state: {
        weatherData: [
            { "city": "Nuuk", "country": "GL", "temp": 5, "humidity": 93, "pressure": 997 },
            { "city": "Urubici", "country": "BR", "temp": 11, "humidity": 98, "pressure": 1020 },
            { "city": "Nairobi", "country": "KE", "temp": 12, "humidity": 67, "pressure": 1023 }
        ],
        updatedAt: 1659995683744,
    }
})

describe('CardsContainer.vue', () => {
    it('renders correctly', () => {
        const wrapper = shallowMount(CardsContainer, { global: { plugins: [store] } })
        expect(wrapper.element).toMatchSnapshot();
    })

    it('renders three cards', () => {
        const wrapper = shallowMount(CardsContainer, { global: { plugins: [store] } })

        expect(wrapper.findAllComponents(WeatherCard).length).toBe(3)
    });
})