<template>
  <section class="cards-container">
    <weather-card
      v-for="weather in weatherData"
      :key="weather.city"
      :cardData="weather"
      @newRequest="requestWeatherData"
    />
  </section>
</template>

<script>
import WeatherCard from "@/components/WeatherCard/WeatherCard.vue";

import { useStore } from 'vuex'
import { onMounted, watch, computed } from 'vue';

const { VUE_APP_TIMER_CACHE } = process.env;
const CITIES_LIST = "3421319,3445709,184745";

export default {
  components: {
    WeatherCard,
  },
  setup() {
    const store = useStore();

    const weatherData = computed(() => store.state.weatherData)
    const updatedAt = computed(() => store.state.updatedAt)

    const requestWeatherData = () => {
      store.dispatch('requestWeatherData', CITIES_LIST)
    }

    onMounted(() => {
      requestWeatherData();
    })

    watch(() => updatedAt, () => {
      setInterval(() => {
        this.requestWeather();
      }, VUE_APP_TIMER_CACHE);
    })

    return {
      weatherData,
      requestWeatherData
    }
  }
};
</script>

<style lang="scss" src="./CardsContainer.scss" />