function validateForm(event){
   
    const name = document.querySelector("#name");
    const dob = document.querySelector("#dob");
    const phoneNumber = document.querySelector("#phone-number");
    const email = document.querySelector("#email");

    
    const nameError = document.getElementById("name-error");
    const dobError = document.getElementById("dob-error");
    const phoneError = document.getElementById("phone-error");
    const emailError = document.getElementById("email-error");

    let isValid = true;

    isValid = isValid && validateLength(name, nameError);

    const dobPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    const dobErrorMessage = "Date of Birth format can be either (DD/MM/YY or DD/MM/YYYY)";
    isValid = isValid && validateByPattern(dob, dobError, dobPattern, dobErrorMessage);

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/
    const phoneErrorMessage = "Phone Number should be in xxx-xxxx-xxxx format";
    isValid = isValid && validateByPattern(phoneNumber, phoneError, phonePattern, phoneErrorMessage);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@yahoo\.(com|in|co\.in)$/;
    const emailErrorMessage = "Email ID can be in any one of the given formats(name@yahoo.com, name@yahoo.in or name@yahoo.co.in)";
    isValid = isValid && validateByPattern(email, emailError, emailPattern, emailErrorMessage);

    isValid = isValid && validateNonEmpty(name, nameError);
    isValid = isValid && validateNonEmpty(dob, dobError);
    isValid = isValid && validateNonEmpty(phoneNumber, phoneError);
    isValid = isValid && validateNonEmpty(email, emailError);

    if(!!isValid)
    alert("Validation success!");

    return !!isValid;
}
function validateByPattern(inputField, errorField, inputPattern, errorMessage){
  if(!inputPattern.test(inputField.value.trim())){
  errorField.textContent = errorMessage;
  return false;
  }
  errorField.textContent = "";
  return true;
}
function validateLength(inputField, errorField){
  const length = inputField.value.trim().length;
  if (length < 3 || length > 10) {
    errorField.textContent = "Name length must be range in 3 and 10";
    return false;
  }
  errorField.textContent = "";
  return true;
}
function validateNonEmpty(inputField, errorField){
    if(inputField.value.trim() === ""){
        errorField.textContent = "This field can not be empty."
        return false;
    }
     errorField.textContent = "";
     return true;
}