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
  computed: {
    ...mapState(["weatherData", "updatedAt"]),
  },
  mounted() {
    this.requestWeather();
  },
  watch: {
    updatedAt() {
      const intervalTimer = (VUE_APP_TIMER_CACHE * 1000 * 60) + 10;
      setInterval(() => {
        this.requestWeather();
      }, intervalTimer);
    },
  },
  methods: {
    ...mapActions(["requestWeatherData"]),
    requestWeather() {
      this.requestWeatherData("3421319,3445709,184745");
    },
  },
};
</script>

<style lang="scss" src="./CardsContainer.scss" />