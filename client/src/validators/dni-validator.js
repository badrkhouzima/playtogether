export function validateDNI(inputs, formRefs) {
  const dni = inputs[3].value;
  console.log("entered in dni validator+>", dni);
  let letter = dni.substr(-1).toUpperCase();
  let number = dni.substr(0, dni.length - 1);
  let reference = "TRWAGMYFPDXBNJZSQVHLCKE";
  //let chekletter = reference[number % 23];
  const chker = number >= 0 && reference[number % 23] === letter;

  if (chker) {
    formRefs.elements["identityNumber"].classList.remove("is-invalid");
    formRefs.elements["identityNumber"].classList.add("is-valid");
    console.log("Valid DNI");
    return true;
  } else {
    formRefs.elements["identityNumber"].classList.remove("is-valid");
    formRefs.elements["identityNumber"].classList.add("is-invalid");
    console.log("Invalid DNI");
    return false;
  }
}
