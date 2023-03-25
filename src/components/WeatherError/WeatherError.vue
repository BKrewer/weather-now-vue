<template>
  <div class="weather-error">
    <span class="weather-error__message">Something went wrong</span>
    <button @click="emitNewRequest" class="weather-error__reload">Try Again</button>
  </div>
</template>

<script>
import bus from '../../utils/bus'

export default {
    methods: {
        emitNewRequest() {
          bus.emit('newRequest')
        }
    }
}
</script>

<style lang="scss" src="./WeatherError.scss" />