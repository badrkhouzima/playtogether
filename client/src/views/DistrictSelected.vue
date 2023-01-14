<template>
  <div>
    <h3>This is {{ district }} district</h3>
    <div>
      <ul class="district_list">
        <li v-for="ele in fetchedData" v-show="ele.Codi_Districte === district">
          {{ ele.Adreca }}
          ==>{{ ele.Codi_Districte }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchSelectedData } from "../api/axios";
export default {
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
  },
};
</script>
<style scoped>
.district_list{
  list-style-type: none;
}
</style>