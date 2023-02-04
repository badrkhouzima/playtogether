<template>
  <form>
    <div class="form-group">
      <select
        name=""
        id="districtSelect" class="custom-select"
        v-model="selectedDistrict"
        @change="handleDistrictChange"
      >
        <option value="" disabled selected>--Select District---</option>
        <option
          v-for="district in districts"
          :value="district.name"
          v-text="district.name"
        ></option>
      </select>
    </div>
  </form>
</template>

<script>
import districts from "../data/district";
export default {
  name: "DistrictMenu",
  props: { txt: String },
  data() {
    return {
      districts,
      selectedDistrict: "",
    };
  },
  methods: {
    handleDistrictChange(event) {
      this.selectedDistrict = event.target.value;
      console.log(this.selectedDistrict); // you can use this district for any other operations.
    },
  },
  watch: {
    selectedDistrict() {
      //let cleanValue = sel.replace(/ /g, "-");
      this.$router.push({
        //  path: `/districtselected/${cleanValue}`,
        name: "districtselected",
        params: { district: this.selectedDistrict },
      });
    },
  },
};
</script>
<style scoped>

.custom-select {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 19px;
  color: #555;
  display: inline-block;
  font-size: 14px;
  height: 34px;
  line-height: 34px;
  outline: none;
  padding: 0 20px;
  width: 20em;

  
   background-position: 90% 50%;
}

.custom-select:focus {
  border-color: #66afe9;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  outline: none;
}

</style>