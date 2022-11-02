<template>
  <main>
    <div class="row">
      <div class="col-9">
        <div class="form-group">
          <input
            class="form-control mt-2 mb-5"
            placeholder="Wpisz frazę..."
            style="text-decoration: none"
            type="text"
            v-model="nameToFilter"
          />
        </div>

        <!-- Main -->
        <div
          class="hover mb-5 p-2 rounded row"
          v-for="(pet, index) in filteredPets"
          :key="index"
        >
          <router-link
            :to="{
              name: 'pet',
              params: { name: pet.name },
            }"
            class="row"
          >
            <div class="col-3 pe-2">
              <img class="rounded" :src="pet.photo" />
            </div>
            <div class="col-6 ps-2 text-center">
              <div class="row">
                <span class="h2">{{ pet.name }}</span>
              </div>
              <div class="row">
                <span class="h5">{{ pet.breed }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <!-- Statistics panel -->
      <div class="rounded-start col-3 h-25 mt-5 p-3 shadow-sm">
        <div>
          <div class="row">
            <span class="h3 mb-3 text-center">Statistics</span>
            <div class="row m-0">
              <div class="col-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="red"
                  class="bi bi-heart-pulse"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Zm8.252-6.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"
                  />
                </svg>
              </div>
              <div class="col-3 h3 text-start">{{ sickPetsNumber }}</div>
            </div>
            <div class="row m-0 mb-4">
              <span class="text-center"><small>Total sick pets</small></span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="red"
              class="bi bi-clipboard-data"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"
              />
              <path
                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
              />
              <path
                d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
              />
            </svg>
          </div>
          <div class="col-3 h3 text-start">{{ averageVisits }}</div>
        </div>
        <div class="row m-0 mb-4">
          <span class="text-center"><small>Awerage wet visit</small></span>
        </div>

        <hr class="mt-2 mb-2" />

        <div class="row">
          <div class="col-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="red"
              class="bi bi-exclamation-triangle"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
              />
              <path
                d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"
              />
            </svg>
          </div>
          <div class="col-8">
            <!-- Problem with sickestPet - if want to access name key  -->
            <!-- Its throwing error - maybe vue bug - find out this -->
            <!-- way work without any problem -->
            <span
              ><b>{{ sickestPet ? sickestPet.name : "unknown" }}</b> is the
              sickest pet.</span
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      nameToFilter: "",
    };
  },
  computed: {
    ...mapGetters({
      getData: "getData",
      sickPetsNumber: "sickPetsNumber",
      averageVisits: "averageVisits",
      sickestPet: "sickestPet",
    }),
    filteredPets() {
      return this.getData.filter((pet) =>
        pet.name.toLowerCase().includes(this.nameToFilter)
      );
    },
  },
  methods: {
    ...mapActions(["fetchDataFromApi", "fetchDataFromApi"]),
  },
  async created() {
    await this.fetchDataFromApi();
  },
};
</script>
<style scoped>
img {
  width: 120px;
  height: 90px;
}
.hover:hover {
  cursor: pointer;
  background-color: rgb(240, 240, 240);
}
a {
  text-decoration: none;
  color: black;
}
</style>
