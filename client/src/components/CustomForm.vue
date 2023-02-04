<template>
  <form @submit.prevent="handleSubmit">
    <h1></h1>
    <CustomInput
      v-for="(input, i) in inputs"
      :key="i"
      v-model="input.value"
      :type="input.type"
    />

    <button type="submit" class="btn btn-success mb-3" style="width: 100%">
      Log In
    </button>
    <small style="display: inline-block; width: 100%; text-align: center"
      >forgot password?</small
    >
  </form>
  <hr />
  <button
   
    type="button"
    class="btn btn-primary mb-3"
    data-bs-toggle="modal"
    data-bs-target="#modal"
    style="width: 100%"
  >
    Sign Up
  </button>
  <ModalApp  :mode="'signup'"  />
</template>
<script>
import CustomInput from "./CustomInput.vue";
import ModalApp from "./ModalApp.vue";
//import { ref } from 'vue'
export default {
  name: "CustomForm",
  components: {
    CustomInput,
    ModalApp
  },
  props: [" v-model"],
  data() {
    return {
      inputs: [
        {
          value: "",
          type: "text",
        },
        {
          value: "",
          type: "password",
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.inputs[0].value, this.inputs[1].value);
    },
    signUpPage() {
      console.log("hi mbadr");
    },
  },
//   setup() {
//     const currentModal = ref(null)
//     return {
//       currentModal
//     }
//   }

  
};
</script>
<style></style>
