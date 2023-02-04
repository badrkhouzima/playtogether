export function checkFormNamesEntries(inputs, formRefs) {
  let isValid = true;
  const namesResults = {
    firstName: !/^[a-zA-Z]{3,10}$/.test(inputs[0].value),
    lastName: !/^[a-zA-Z]{3,10}$/.test(inputs[1].value),
    userName: !/^[a-zA-Z]{3,10}$/.test(inputs[2].value),
  };

  if (namesResults.firstName) {
    console.log("firstname 100");
    formRefs.elements["firstName"].classList.remove("is-valid");
    formRefs.elements["firstName"].classList.add("is-invalid");
    isValid = false;
  } else {
    console.log("firstname 2");
    formRefs.elements["firstName"].classList.remove("is-invalid");
    formRefs.elements["firstName"].classList.add("is-valid");
    // inputs[0].value = inputs[0].value.toLowerCase();
  }

  if (namesResults.lastName) {
    formRefs.elements["lastName"].classList.add("is-invalid");
    isValid = false;
  } else {
    formRefs.elements["lastName"].classList.remove("is-invalid");
    formRefs.elements["lastName"].classList.add("is-valid");
    //inputs[1].value = inputs[1].value.toLowerCase();
  }

  if (namesResults.userName) {
    formRefs.elements["userName"].classList.add("is-invalid");
    isValid = false;
  } else {
    formRefs.elements["userName"].classList.remove("is-invalid");
    formRefs.elements["userName"].classList.add("is-valid");
    //inputs[2].value = inputs[2].value.toLowerCase();
  }
  return isValid;
}
