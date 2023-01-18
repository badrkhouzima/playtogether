<template>
  <div class="d-flex flex-column align-items-center">
    <div class="calendar">
      <table>
        <thead>
          <tr>
            <th class="week__day"  v-for="day in days" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="week in weeks" :key="week">
            <td class="day" v-for="day in week" :key="day">{{ day.format("D") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div>

  </div>
</template>

<script>
import moment from "moment";

export default {
    name: "MonthCalander",
  data() {
    return {
      date: moment(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      weeks: [],
    };
  },
  mounted() {
    this.generateCalendar();
  },
  methods: {
    generateCalendar() {
      let currentMonth = this.date.month();
      let currentYear = this.date.year();
      let firstDayOfMonth = moment({
        year: currentYear,
        month: currentMonth,
      }).startOf("month");
      let lastDayOfMonth = moment({
        year: currentYear,
        month: currentMonth,
      }).endOf("month");
      let daysInMonth = lastDayOfMonth.date();
      let daysInWeek = [];
      for (let i = 1; i <= daysInMonth; i++) {
        let day = moment({ year: currentYear, month: currentMonth, day: i });
        daysInWeek.push(day);
        if (day.weekday() === 6 || i === daysInMonth) {
          this.weeks.push(daysInWeek);
          daysInWeek = [];
        }
      }
    },
  },
};
</script>

<style scoped>
.week__day{
    padding: 3px 6px;
}
.day{
    padding: 3px 6px;
}
.day:hover{
  background-color: antiquewhite;
  cursor: pointer;
}
</style>
