import { createStore } from "vuex";
import axios from "axios";

const API_URL =
  "https://connectstatic.ams3.digitaloceanspaces.com/rekrutacja/pets.json";

export default createStore({
  state: {
    data: [],
    sickestPet: "",
  },
  getters: {
    getData: (state) => {
      return state.data;
    },
    sickPetsNumber: (state) => {
      return Object.values(state.data).filter((p) => p.sick === true).length;
    },
    averageVisits: (state) => {
      return Math.ceil(
        state.data.reduce((prev, cur) => prev + cur.wet_visits, 0) /
          state.data.length
      );
    },
    sickestPet: (state) => {
      const maxVal = Math.max(...state.data.map((o) => o.wet_visits), 0);
      return state.data.find((el) => el.wet_visits == maxVal);
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data.data;
    },
  },
  actions: {
    async fetchDataFromApi(context) {
      try {
        let response = await axios.get(API_URL);
        context.commit("SET_DATA", response);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  modules: {},
});
