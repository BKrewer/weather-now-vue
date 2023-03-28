<template>
  <div class="weather-error">
    <span class="weather-error__message">Something went wrong</span>
    <button @click="emitNewRequest" class="weather-error__reload">
      Try Again
    </button>
  </div>
</template>

<script>
import { useStore } from 'vuex'

const CITIES_LIST = "3421319,3445709,184745";

export default {
  setup() {
    const store = useStore();
    
    const emitNewRequest = () => {
      requestWeatherData()
    };

    const requestWeatherData = () => {
      store.dispatch('requestWeatherData', CITIES_LIST)
    }

    return {
      emitNewRequest
    }
  },
};
</script>

<style lang="scss" src="./WeatherError.scss" />