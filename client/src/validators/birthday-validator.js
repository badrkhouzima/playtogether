export function validateBirthday(inputs, formRefs) {
  let isNotvalid = false;
  const birthday = inputs[4].value;
  if (birthday) {
    // formRefs.elements["childBirthday"].remove("is-invalid");
    // formRefs.elements["childBirthday"].add("is-valid");
    isNotvalid = true;
  }
  // formRefs.elements["childBirthday"].add("is-invalid");
  return isNotvalid;
}
