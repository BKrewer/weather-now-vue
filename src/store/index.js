import Vue from 'vue'
import Vuex from 'vuex'

import { requestWeather, validateCacheData, getCacheData, saveCacheData, formatData } from "@/services/weatherService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: [
      {
        city: 'Nuuk',
        country: 'GL'
      },
      {
        city: 'Urubici',
        country: 'BR'
      },
      {
        city: 'Nairobi',
        country: 'KE'
      }
    ],
    loading: false,
    error: false
  },
  mutations: {
    setWeatherData(state, payload) {
      state.weatherData = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
    async requestWeatherData({ commit }, requestString) {
      commit('setLoading', true);

      const dataCached = getCacheData();

      if (dataCached && validateCacheData(dataCached.updateAt)) {
        console.log('peguei do cache')
        commit("setWeatherData", dataCached.list)
        commit('setLoading', false);
        return;
      }

      try {
        const { data } = await requestWeather(requestString);

        if (!data) {
          commit('setLoading', false);
          commit('setError', true);
          return;
        }

        const dataFormatted = formatData(data.list);
        console.log('fiz a request')
        saveCacheData(dataFormatted);
        commit("setWeatherData", dataFormatted)
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', true);
      }
    }
  }
})
