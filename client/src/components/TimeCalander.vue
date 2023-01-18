<template>
  <div>
    <div class="time-picker d-flex justify-content-center">
      <select v-model="selectedHour" @change="updateTime">
        <option v-for="hour in hours" :key="hour" :value="hour">
          {{ hour }}
        </option>
      </select>
      <select v-model="selectedMinute" @change="updateTime">
        <option v-for="minute in minutes" :key="minute" :value="minute">
          {{ minute }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeCalander",
  data() {
    return {
      selectedHour: 9,
      selectedMinute: "00",
      hours: Array.from({ length: 13 }, (_, i) => 9 + i),
      minutes: ["00", "15", "30", "45"],
    };
  },
  methods: {
    updateTime() {
      let selectedTime = `${this.selectedHour}:${this.selectedMinute}`;
      this.$emit("time-selected", selectedTime);
    },
  },
};
</script>
