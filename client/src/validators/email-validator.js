export function validateEmail(inputs, formRefs) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const emailValue = inputs[5].value;
  const repeatEmailValue = inputs[6].value;

  const isValidEmail = emailRegex.test(emailValue);
  const isRepeatEmailValid = emailRegex.test(repeatEmailValue);

  if (!isValidEmail) {
    console.log("email nooot");
    formRefs.elements["email"].classList.remove("is-valid");
    formRefs.elements["email"].classList.add("is-invalid");
    console.log("emmail not valid", !isValidEmail);
    return false;
  } else if (!isRepeatEmailValid) {
    console.log("repeat email nooot");
    formRefs.elements["repeatEmail"].classList.remove("is-valid");
    formRefs.elements["repeatEmail"].classList.add("is-invalid");
    console.log("repeat emmail not valid", !isRepeatEmailValid);
    return false;
  } else if (emailValue !== repeatEmailValue) {
    console.log("emails not match");
    formRefs.elements["email"].classList.remove("is-valid");
    formRefs.elements["email"].classList.add("is-invalid");
    formRefs.elements["repeatEmail"].classList.remove("is-valid");
    formRefs.elements["repeatEmail"].classList.add("is-invalid");
    console.log("emails not match", emailValue, repeatEmailValue);
    return false;
  } else {
    console.log("email yes");
    formRefs.elements["email"].classList.remove("is-invalid");
    formRefs.elements["email"].classList.add("is-valid");
    formRefs.elements["repeatEmail"].classList.remove("is-invalid");
    formRefs.elements["repeatEmail"].classList.add("is-valid");
    inputs[5].value = emailValue.toLowerCase();
    console.log("here is the", isValidEmail)
    return isValidEmail;
  }
}
