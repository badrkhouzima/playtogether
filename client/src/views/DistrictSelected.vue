<template>
  <!-- <div>
    <h3>This is {{ district }} district</h3>
    <div>
      <ul class="district_list">
        <li v-for="ele in fetchedData" v-show="ele.Codi_Districte === district">
          {{ ele.Adreca }}
          ==>
          {{ ele.Codi_Districte }} =>{{ ele.Area_Joc_Id }}
        </li>
      </ul>
    </div>
  </div> -->
  <div class="d-flex flex-column align-items-center">
    <h3 class="mt-5 mb-3">This is {{ district }} district</h3>
    <div class="d-flex p-2 mt-2 justify-content-center">
      <div class="list-group">
        <div
          class="list-group-item list-group-item-action"
          aria-current="true"
          v-for="ele in fetchedData"
          v-show="ele.Codi_Districte === district"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ ele.Adreca }}</h5>
            <small> {{ ele.Codi_Districte }}</small>
          </div>
          <p class="mb-1">Something abyout the park....</p>
          <small>
            <a
              :href="mapLink"
              @click.prevent="goToMap(ele.Latitud, ele.Longitud)"
              >Go to the direction from here..</a
            >
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- //fetchedData.Latitud
//fetchedData.Longitud -->
<script>
import { fetchSelectedData } from "../api/axios";
export default {
  name: "DistrictSelected",
  data() {
    return {
      fetchedData: [],
      // lat: "",
      // lng: "",
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
    mapLink() {
      return `https://www.google.com/maps?q=${this.lat},${this.lng}`;
    },
  },
  methods: {
    goToMap(lat, lng) {
      this.lat = lat;
      this.lng = lng;
      if (this.mapLink)
        window.open(`https://www.google.com/maps?q=${this.lat},${this.lng}`, "_blank", "noopener,noreferrer");
    },
  },
};
</script>
<style scoped>
.district_list {
  list-style-type: none;
}
</style>
