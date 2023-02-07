<template>
  <div id="modal" class="modal" tabindex="-1">
    <template v-if="mode === 'parentWantSchedule'">
      <div class="modal-dialog d-flex justify-content-center">
        <div class="modal-content" style="width: 83%">
          <div class="modal-header">
            <h5 class="modal-title mt-4">
              Tell parents when you are heading to the playground
            </h5>
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
          <div class="d-flex flex-column align-items-center mt-3">
            <p>
              <small
                >Tell us something about your child if you would like to:</small
              >
            </p>
            <textarea
              v-model="textInput"
              placeholder="This is optional..."
              @input="checkTextLength"
              rows="4"
              :cols="columnSize"
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
    </template>
    <template v-if="mode === 'signup'">
      <div class="modal-dialog d-flex justify-content-center sign-up">
        <div class="modal-content" style="width: 83%">
          <div class="modal-header">
            <h5 class="modal-title flex-grow-1 text-center">Sign Up</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body-signup" style="width: 90%">
            <form
              class="needs-validation"
              novalidate
              ref="form"
              @submit.prevent="submitForm"
            >
              <div class="d-flex flex-column form-group">
                <div class="d-flex" v-if="inputs.length > 1">
                  <input
                    v-for="(input, i) in inputs.slice(0, 2)"
                    :key="i"
                    v-model="input.value"
                    :type="input.type"
                    :placeholder="input.placeholder"
                    :id="input.id"
                    :name="input.name"
                    :class="input.class"
                    :required="input.required"
                    :size="input.size"
                    style="flex: 0.8"
                    :minlength="input.minlength"
                    :maxlength="input.maxlength"
                  />
                </div>

                <input
                  v-for="(input, i) in inputs.slice(2)"
                  :key="i + inputs.slice(0, 2).length"
                  v-model="input.value"
                  :type="input.type"
                  :placeholder="input.placeholder"
                  :id="input.id"
                  :name="input.name"
                  :class="input.class"
                  :required="input.required"
                  :size="input.size"
                  :minlength="input.minlength"
                  :maxlength="input.maxlength"
                  :min="input.min"
                  :max="input.max"
                />

                <!-- <div class="valid-feedback">Valid.</div> -->
              </div>
              <div class="modal-footer justify-content-center">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import MonthCalander from "./MonthCalander.vue";
import TimeCalander from "./TimeCalander.vue";
import { checkFormNamesEntries } from "@/validators/signup-validation.js";
import { validateDNI } from "@/validators/dni-validator.js";
import { validateEmail } from "@/validators/email-validator.js";
import { validatePassword } from "@/validators/password-validator.js";
import { validateBirthday } from "@/validators/birthday-validator.js";
import { calanderControler } from "@/validators/calander-controler.js";
import idGenerator from "@/generator/id-generator";

export default {
  name: "CalanderModal",
  components: {
    MonthCalander,
    TimeCalander,
  },
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  computed: {
    columnSize() {
      return window.innerWidth < 768 ? "33" : "44";
    },
  },
  mounted() {
    const { min, max } = calanderControler();
    this.min = min;
    this.max = max;
    console.log("miniss", min);
    console.log("maxxx", max);
  },
  data() {
    return {
      textInput: "",
      textLength: 0,
      inputs: [
        {
          value: "",
          type: "text",
          placeholder: "First Name",
          id: "firstName",
          name: "firstName",
          class: "form-control style_input-name input__border",
          required: "required",
          minlength: "3",
          maxlength: "10",
          // feedback:"your fn aint valid"
        },
        {
          value: "",
          type: "text",
          placeholder: "Last Name",
          id: "lastName",
          name: "lastName",
          class: "form-control style_input-name input__border",
          required: "required",
          minlength: "3",
          maxlength: "10",
        },
        {
          value: "",
          type: "text",
          placeholder: "User Name",
          id: "userName",
          name: "userName",
          class: "form-control style_input input__border",
          required: "required",
          minlength: "3",
          maxlength: "10",
        },
        {
          value: "",
          type: "text",
          placeholder: "identity Number",
          id: "identityNumber",
          name: "identityNumber",
          class: "form-control style_input input__border",
          required: "true",
          minlength: "10",
          maxlength: "10",
        },
        {
          value: "",
          type: "date",
          placeholder: "Child Birthday",
          id: "childBirthday",
          name: "childBirthday",
          class: "form-comtrol style_input",
          required: "true",
          min: this.min,
          max: this.max,
        },
        {
          value: "",
          type: "email",
          placeholder: "Email",
          id: "email",
          name: "email",
          class: "form-control style_input input__border",
          required: "true",
        },
        {
          value: "",
          type: "email",
          placeholder: "Repeat Email",
          id: "repeatEmail",
          name: "repeatEmail",
          class: "form-control style_input input__border",
          required: "true",
          minlength: "10",
          maxlength: "25",
        },
        {
          value: "",
          type: "password",
          placeholder: "Password",
          id: "password",
          name: "password",
          class: "form-control style_input input__border",
          required: "true",
          minlength: "6",
          maxlength: "10",
        },
        {
          value: "",
          type: "password",
          placeholder: "repeatPassword",
          id: "repeatPassword",
          name: "repeatPassword",
          class: "form-control style_input input__border",
          required: "true",
          minlength: "6",
          maxlength: "10",
        },
      ],
      userDataValidated: {},
    };
  },
  methods: {
    parentRegistered() {
      this.$router.push("/registeredParentHome");
    },
    checkTextLength() {
      this.textLength = this.textInput.length;
      if (this.textLength > 200) {
        this.textInput = this.textInput.slice(0, 200);
        this.textLength = 200;
      }
    },
    submitForm() {
      const namesValid = checkFormNamesEntries(this.inputs, this.$refs.form);
      const dniValid = validateDNI(this.inputs, this.$refs.form);
      const birthdayValid = validateBirthday(this.inputs, this.$refs.form);
      const emailValid = validateEmail(this.inputs, this.$refs.form);
      const passwordValid = validatePassword(this.inputs, this.$refs.form);

      if (
        namesValid &&
        dniValid &&
        emailValid &&
        passwordValid &&
        birthdayValid
      ) {
        this.userDataValidated = {
          firstname: this.inputs[0].value,
          lastname: this.inputs[1].value,
          username: this.inputs[2].value,
          dninumber: this.inputs[3].value,
          birthday: this.inputs[4].value,
          useremail: this.inputs[5].value,
          userpassword: this.inputs[7].value,
          usergenetaredid: idGenerator(),
        };
        // localStorage.setItem(
        //   "userData",
        //   JSON.stringify(this.userDataValidated)
        // );
        localStorage.setItem(
          "userData",
          JSON.stringify(this.userDataValidated)
        );
        this.parentRegistered();
        //this.$bvModal.hide("modal");
      }
    },
  },
};
</script>

<style scoped>
.style_input-name {
  padding: 5px;
}
.style_input,
.style_input-name {
  margin: 10px 0;
}
.input__border {
  /* border: none; */
  border-radius: 14px;
  overflow: hidden;
}
.modal-content {
  background-color: #d6f7f3;
  width: 40vw;
}
.modal-body-signup {
  text-align: center;
  margin: 0 auto;
}
</style>
