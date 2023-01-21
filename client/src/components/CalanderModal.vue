<template>
  <div id="exampleModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title mt-4">Tell parents when you are heading to the playground</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body ">
          <p>Pick up a date and time.</p>
          <MonthCalander />
        </div>
        <div>
          <TimeCalander />
        </div>
        <div class="d-flex flex-column align-items-center mt-3">
          <p>
            <small>Tell us something about your child if you would like to:</small>
          </p>
          <textarea
            v-model="textInput"
            placeholder="This is optional..."
            @input="checkTextLength"
            rows="4"
            cols="40"
          ></textarea>
          <p v-if="textLength > 200">{{ textLength }}/200 characters</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Send</button>
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
  data() {
    return {
      textInput: "",
      textLength: 0,
    };
  },
  methods: {
    checkTextLength() {
      this.textLength = this.textInput.length;
      if (this.textLength > 200) {
        this.textInput = this.textInput.slice(0, 200);
        this.textLength = 200;
      }
    },
  },
};
</script>

<style scoped></style>
