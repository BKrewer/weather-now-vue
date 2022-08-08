import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import WeatherCard from '@/components/WeatherCard/WeatherCard.vue'
import AppLoading from '@/components/AppLoading/AppLoading.vue'
import WeatherError from '@/components/WeatherError/WeatherError.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

localVue.filter("formatTime", (data) => data);

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

describe('WeatherCard.vue', () => {
    let store
    let state
    beforeEach(() => {
        state = {
            loading: false,
            error: false,
            updatedAt: null,
        }
        store = new Vuex.Store({
            state
        })
    })

    it('renders with WeatherError component', () => {
        state.error = true;
        const wrapper = shallowMount(WeatherCard, { propsData: { cardData: initialData }, store, localVue })

        const weatherError = wrapper.findComponent(WeatherError)
        expect(weatherError.exists()).toBe(true)
    })
    it('renders with AppLoading container', () => {
        state.loading = true;
        const wrapper = shallowMount(WeatherCard, { propsData: { cardData: initialData }, store, localVue })

        const appLoading = wrapper.findComponent(AppLoading)
        expect(appLoading.exists()).toBe(true)
    })
    it('renders with card data', () => {
        state.updatedAt = new Date();
        const wrapper = shallowMount(WeatherCard, { propsData: { cardData }, store, localVue })

        const contentData = wrapper.find('.weather-card__content')
        expect(contentData.exists()).toBe(true)
    })
})