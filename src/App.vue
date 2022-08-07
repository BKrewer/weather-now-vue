<template>
  <div id="app">
    <app-header />
    <div class="cards">
      <weather-card v-for="card in cards" :key="card.city" :cardData="card"/>
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
  },
  data() {
    return {
      cards: [
        {
          city: 'Nuuk',
          country: 'GL',
          temperature: -4,
          hummidity: 75,
          pressure: 892,
          updatedAt: "02:48:32 PM"
        },
        {
          city: 'Urubici',
          country: 'BR',
          temperature: 19,
          hummidity: 75,
          pressure: 892,
          updatedAt: "02:48:32 PM"
        },
        {
          city: 'Nairobi',
          country: 'KE',
          temperature: 31,
          hummidity: 75,
          pressure: 892,
          updatedAt: "02:48:32 PM"
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./App.scss" />
