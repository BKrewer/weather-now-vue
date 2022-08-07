<template>
  <div class="weather-card">
    <div class="weather-card__header">
      <h2 class="weather-card__title">
        Naibori, KE
      </h2>
    </div>
    <div class="weather-card__body">
      <span class="weather-card__temperature">
        19°
      </span>
    </div>
    <div class="weather-card__footer">
        <div class="weather-card__aditional-info">
            <span class="weather-card__humidity"></span>
            <span class="weather-card__humidity"></span>
        </div>
        <span class="weather-card__updated">Updated at 08:11:29 PM</span>
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
};
</script>

<style lang="scss" src="./WeatherCard.scss" />