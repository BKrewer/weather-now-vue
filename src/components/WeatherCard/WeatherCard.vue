<template>
  <div
    class="weather-card"
    @mouseover="showAddInfo = true"
    @mouseleave="showAddInfo = false"
  >
    <div class="weather-card__header">
      <h2 class="weather-card__title">
        {{ cardData.city }}, {{ cardData.country }}
      </h2>
    </div>

    <app-loading v-if="loading" />

    <div v-if="updatedAt && !loading" class="weather-card__content">
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
      </div>
      <span class="weather-card__updated">Updated at {{ updatedAt }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppLoading from "../AppLoading/AppLoading.vue";
export default {
  components: {
    AppLoading,
  },
  props: {
    cardData: {
      type: Object,
      default: () => {},
    },
    updatedAt: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      showAddInfo: false,
    };
  },
  computed: {
    ...mapState(["loading", "error"]),
    temperatureClass() {
      if (this.cardData.temperature <= 5) {
        return "weather-card__temperature--cold";
      }

      if (this.cardData.temperature > 25) {
        return "weather-card__temperature--hot";
      }

      return "";
    },
  },
};
</script>

<style lang="scss" src="./WeatherCard.scss" />