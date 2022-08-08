<template>
  <section class="cards-container">
    <weather-card v-for="weather in weatherData" :key="weather.city" :cardData="weather" :updatedAt="updatedAt" />
  </section>
</template>

<script>
import WeatherCard from "@/components/WeatherCard/WeatherCard.vue";

import { mapActions, mapState } from 'vuex';

export default {
  components: {
    WeatherCard,
  },
  computed: {
    ...mapState(['weatherData']),
    updatedAt() {
      return this.weatherData && this.weatherData.updatedAt;
    }
  },
  mounted() {
    this.requestWeather();
  },
  methods: {
    ...mapActions(['requestWeatherData']),
    requestWeather() {
      this.requestWeatherData('3421319,3445709,184745').then(() => {
         console.log(this.weatherData,  this.loading, this.error)
      });
    },
  },
};
</script>

<style lang="scss" src="./CardsContainer.scss" />