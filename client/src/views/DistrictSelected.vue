<template>
  <div class="d-flex flex-column align-items-center">
    <h3 class="mt-5 mb-3">{{ district }}</h3>
    <div class="d-flex p-2 mt-2 justify-content-center">
      <div class="list-group">
        <div
          class="list-group-item list-group-item-action mb-3 border-top border-secondary rounded"
          aria-current="true"
          v-for="ele in fetchedData"
          v-show="ele.Codi_Districte === district"
        >
          <div class="d-flex w-100 justify-content-between">
            <h6 class="mb-1">{{ ele.Adreca }}</h6>
            <small> {{ ele.Codi_Districte }}</small>
          </div>
          <p class="my-3">
            Boost Your Child's Brain Power with Shared Playtime - A Fun Way to
            Enhance Cognitive Development!
          </p>
          <small>
            <a href="" @click.prevent="goToMap(ele.Latitud, ele.Longitud)"
              >Get the direction here..</a
            >
          </small>
          <div class="d-flex justify-content-between mt-3">
            <button
              data-bs-toggle="modal"
              data-bs-target="#modal"
              class="btn btn-info mx-2"
            >
              Tell Us When You Wanna Go
            </button>
            <button @click="showSchedule" class="btn btn-info mx-2">
              Park Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ModalApp :mode="'parentWantSchedule'" />
</template>
<script>
import { fetchSelectedData } from "../api/axios";
import ModalApp from "../components/ModalApp.vue";
//import { ref } from "vue";
export default {
  components: { ModalApp },
  name: "DistrictSelected",
  data() {
    return {
      fetchedData: [],
    };
  },
  created() {
    fetchSelectedData().then((data) => {
      this.fetchedData = data;
      console.log("check here =>", this.fetchedData);
    });
  },
  computed: {
    district() {
      return this.$route.params.district;
    },
    // mapLink() {
    //   return `https://www.google.com/maps?q=${this.lat},${this.lng}`;
    // },
  },
  methods: {
    goToMap(lat, lng) {
      this.lat = lat;
      this.lng = lng;
      window.open(
        `https://www.google.com/maps?q=${this.lat},${this.lng}`,
        "_blank",
        "noopener,noreferrer"
      );
    },
    showSchedule() {},
  },
  // setup() {
  //   const parentSetUpTime = ref(false)
  //   return {

  //     parentSetUpTime
  //   }
  // }
};
</script>
<style scoped>
.district_list {
  list-style-type: none;
}
p {
    font-size: 1.2rem;
    font-weight: 400;
    max-width: 500px;
    margin: 0 auto;
  }
</style>
