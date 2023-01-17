<template>
  <form>
    <select
      name=""
      id=""
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
        params: { district: this.selectedDistrict},
      });
    },
  },
};
</script>
