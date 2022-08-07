<template>
  <div class="weather-card">
    <div class="weather-card__header">
      <h2 class="weather-card__title">
        {{ cardData.city }}, {{ cardData.country }}
      </h2>
    </div>
    <div class="weather-card__body">
      <span class="weather-card__temperature" :class="temperatureClass">
        {{ cardData.temperature }}°
      </span>
    </div>
    <div class="weather-card__footer">
      <div class="weather-card__additional-infos">
        <div class="weather-card__additional-info">
          <span>hummidity</span>
          <strong>{{ cardData.hummidity }}</strong>%
        </div>
        <div class="weather-card__additional-info">
          <span>pressure</span>
          <strong>{{ cardData.pressure }}</strong>hPa
        </div>
      </div>
      <span class="weather-card__updated"
        >Updated at {{ cardData.updatedAt }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
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