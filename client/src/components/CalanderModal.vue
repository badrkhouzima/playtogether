<template>
  <div id="exampleModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Pick up a date and time.</p>
          <MonthCalander />
        </div>
        <div>
          <TimeCalander />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonthCalander from "./MonthCalander.vue";
import TimeCalander from "./TimeCalander.vue";
export default {
  name: "CalanderModal",
  components: {
    MonthCalander,
    TimeCalander,
  },
};
</script>

<style scoped></style>
