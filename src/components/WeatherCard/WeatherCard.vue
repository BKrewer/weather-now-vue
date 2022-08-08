<template>
  <div
    class="weather-card"
    :class="{ 'weather-card--with-error': error }"
    @mouseover="showAddInfo = true"
    @mouseleave="showAddInfo = false"
  >
    <div class="weather-card__header">
      <h2 class="weather-card__title">
        {{ cardData.city }}, {{ cardData.country }}
      </h2>
    </div>

    <weather-error v-if="error && !loading" @newRequest="emitNewRequest" />

    <app-loading v-if="loading" />

    <div v-if="updatedAt && !loading && !error" class="weather-card__content">
      <div class="weather-card__body">
        <span class="weather-card__temperature" :class="temperatureClass">
          {{ cardData.temp }}°
        </span>
      </div>
      <div class="weather-card__footer">
        <div v-show="showAddInfo" class="weather-card__additional-infos">
          <div class="weather-card__additional-info">
            <span>humidity</span>
            <strong>{{ cardData.humidity }}</strong
            >%
          </div>
          <div class="weather-card__additional-info">
            <span>pressure</span>
            <strong>{{ cardData.pressure }}</strong
            >hPa
          </div>
        </div>
        <span class="weather-card__updated">Updated at {{ updatedAt | formatTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppLoading from "../AppLoading/AppLoading.vue";
import WeatherError from "../WeatherError/WeatherError.vue";

export default {
  components: {
    AppLoading,
    WeatherError,
  },
  props: {
    cardData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showAddInfo: false,
    };
  },
  computed: {
    ...mapState(["loading", "error", 'updatedAt']),
    temperatureClass() {
      const temp = this.cardData.temp;

      if (temp <= 5) {
        return "weather-card__temperature--cold";
      }

      if (temp > 25) {
        return "weather-card__temperature--hot";
      }

      return "";
    },
  },
  methods: {
    emitNewRequest() {
      this.$emit("newRequest");
    },
  },
};
</script>

<style lang="scss" src="./WeatherCard.scss" />