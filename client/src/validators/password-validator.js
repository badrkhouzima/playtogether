export function validatePassword(inputs, formRefs) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,10})/;
  const password = inputs[7].value;
  const repeatPassword = inputs[8].value;
  const isValidPassword = passwordRegex.test(password);
  const isValidRepeatPassword = passwordRegex.test(repeatPassword);

  if (!isValidPassword) {
    //formRefs.elements["firstName"].classList.remove("is-valid");
    formRefs.elements["password"].classList.add("is-invalid");
    return false;
  } else if (!isValidRepeatPassword) {
    //formRefs.elements["firstName"].classList.remove("is-valid");
    formRefs.elements["repeatPassword"].classList.add("is-invalid");
    return false;
  } else if (password !== repeatPassword) {
    formRefs.elements["password"].classList.remove("is-valid");
    formRefs.elements["password"].classList.add("is-invalid");
    formRefs.elements["repeatPassword"].classList.remove("is-valid");
    formRefs.elements["repeatPassword"].classList.add("is-invalid");
    return false;
  } else {
    formRefs.elements["password"].classList.remove("is-invalid");
    formRefs.elements["password"].classList.add("is-valid");
    formRefs.elements["repeatPassword"].classList.remove("is-invalid");
    formRefs.elements["repeatPassword"].classList.add("is-valid");
    console.log("Password is valid.");
    return true;
  }
}
