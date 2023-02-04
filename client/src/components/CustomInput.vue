<template>
  <div class="mb-2">
    <input class="form-control" v-model="inputValue" :type="type" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    // placeholder: {
    //   type: String,
    //   default: "",
    // },
    // disabled: {
    //   type: Boolean,
    //   default: false,
    // },
    // required: {
    //   type: Boolean,
    //   default: false,
    // },
    type: {
      type: String,
      default: "text",
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
  },
};
</script>
