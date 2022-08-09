<template>
  <section class="cards-container">
    <weather-card
      v-for="weather in weatherData"
      :key="weather.city"
      :cardData="weather"
      @newRequest="requestWeather"
    />
  </section>
</template>

<script>
import WeatherCard from "@/components/WeatherCard/WeatherCard.vue";

import { mapActions, mapState } from "vuex";

const { VUE_APP_TIMER_CACHE } = process.env;

export default {
  components: {
    WeatherCard,
  },
  data() {
    return {
      citiesList: "3421319,3445709,184745"
    }
  },
  computed: {
    ...mapState(["weatherData", "updatedAt"]),
  },
  mounted() {
    this.requestWeather();
  },
  watch: {
    updatedAt() {
      setInterval(() => {
        this.requestWeather();
      }, VUE_APP_TIMER_CACHE);
    },
  },
  methods: {
    ...mapActions(["requestWeatherData"]),
    requestWeather() {
      this.requestWeatherData(this.citiesList);
    },
  },
};
</script>

<style lang="scss" src="./CardsContainer.scss" />