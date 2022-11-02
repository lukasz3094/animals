<template>
  <main>
    <div class="mb-5 p-2 rounded row">
      <div class="col-3 pe-5">
        <img class="rounded" :src="filtered.photo" />
      </div>
      <div class="col-9 ps-5 text-start">
        <div class="row">
          <span class="h2">{{ filtered.name }}</span>
          <span class="h3">Lat: {{ filtered.age }}</span>
        </div>
        <div class="row">
          <span class="h5">{{ filtered.breed }}</span>
          <span class="h5">Chory: {{ filtered.sick ? "Tak" : "Nie" }}</span>
          <span class="h5">Ilość wizyt: {{ filtered.wet_visits }}</span>
        </div>
      </div>
    </div>
    <router-link class="btn btn-primary" to="/">Powrót</router-link>
  </main>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getData", "getData"]),
    petName() {
      return this.$route.params.name;
    },
    filtered() {
      return this.getData.find((p) => p.name === this.petName);
    },
  },
};
</script>
<style scoped>
img {
  width: 10vw;
  height: 7vw;
}
</style>
