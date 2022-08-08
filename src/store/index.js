import Vue from 'vue'
import Vuex from 'vuex'

import { requestWeather, formatData } from "@/services/weatherService";
import { saveCacheData, getValidCache } from "@/services/cacheService"

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
    error: false,
    updatedAt: null,
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
    },
    setUpdatedAt(state, payload) {
      state.updatedAt = payload
    }
  },
  actions: {
    async requestWeatherData({ commit }, requestString) {
      commit('setLoading', true);

      const dataCached = getValidCache("weathernow");

      if (dataCached) {
        commit('setUpdatedAt', dataCached[3])
        dataCached.pop();

        commit("setWeatherData", dataCached)
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

        const dtNow = Date.now();
        dataFormatted.push(dtNow);

        saveCacheData("weathernow", dataFormatted);

        dataFormatted.pop();

        commit("setWeatherData", dataFormatted)
        commit('setUpdatedAt', dtNow)
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', true);
      }
    }
  }
})
