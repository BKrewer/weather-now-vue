<template>
  <div id="app">
    <app-header />
    <div class="cards">
      <weather-card />
    <weather-card />
    <weather-card />
    </div>
    
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/AppHeader.vue'
import WeatherCard from './components/WeatherCard/WeatherCard.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    WeatherCard
  }
}
</script>

<style lang="scss" src="./App.scss" />
