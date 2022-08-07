<template>
  <div id="app">
    <app-header />
    <cards-container />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/AppHeader.vue'
import CardsContainer from './components/CardsContainer/CardsContainer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    CardsContainer
  },
}
</script>

<style lang="scss" src="./App.scss" />
