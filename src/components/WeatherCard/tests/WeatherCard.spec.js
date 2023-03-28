import { createStore } from 'vuex'
import { shallowMount } from '@vue/test-utils'
import WeatherCard from '@/components/WeatherCard/WeatherCard.vue'
import AppLoading from '@/components/AppLoading/AppLoading.vue'
import WeatherError from '@/components/WeatherError/WeatherError.vue'

const initialData = {
    city: "Nuuk",
    country: "GL",
}

const cardData = {
    city: "Nuuk",
    country: "GL",
    humidity: 93,
    pressure: 998,
    temp: 5
}

const store = createStore({
    state() {
        return {
            loading: false,
            error: false,
            updatedAt: null
        }
    },
})

describe('WeatherCard.vue', () => {
    it('renders with WeatherError component', () => {
        store.state.error = true;
        const wrapper = shallowMount(WeatherCard, { props: { cardData: initialData }, global: { plugins: [store] } })

        const weatherError = wrapper.findComponent(WeatherError)
        expect(weatherError.exists()).toBe(true)
    })
    it('renders with AppLoading container', () => {
        store.state.loading = true;
        const wrapper = shallowMount(WeatherCard, { props: { cardData: initialData }, global: { plugins: [store] } })

        const appLoading = wrapper.findComponent(AppLoading)
        expect(appLoading.exists()).toBe(true)
    })
    it('renders with card data', () => {
        store.state.updatedAt = new Date();
        store.state.error = false;
        store.state.loading = false;
        
        const wrapper = shallowMount(WeatherCard, { props: { cardData }, global: { plugins: [store] } })

        const contentData = wrapper.find('.weather-card__content')
        expect(contentData.exists()).toBe(true)
    })
})