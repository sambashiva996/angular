function validateRegisterForm(){
    
    const month = document.querySelector("#month");
    const day = document.querySelector("#day");
    const year = document.querySelector("#year");

    const bodError = document.getElementById("bod-error");

    let isValid = true;

    isValid = isValid && isDate(month, day, year, bodError);

    const password = document.querySelector("#password");
    const rePpassword = document.querySelector("#re-password");

    const passwordError = document.getElementById("password-error");
    const rePpasswordError = document.getElementById("re-password-error");

    isValid = isValid && isPass(password, rePpassword, passwordError, rePpasswordError);

    const loginName = document.querySelector("#login-name");
    const loginNameError = document.getElementById("login-name-error");

    isValid = isValid && isName(loginName, loginNameError);

    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");

    const firstNameError = document.getElementById("first-name-error");
    const lastNameError = document.getElementById("last-name-error");

    isValid = isValid && isFullName(firstName, firstNameError, lastName, lastNameError);

    const hintQuestion = document.querySelector("#hint-question");
    const createQuestion = document.querySelector("#create-question");

    const hintQuestionError = document.getElementById("hint-question-error");
    const createQuestionError = document.getElementById("creaate-question-error");

    isValid = isValid && isHintQuesAns(hintQuestion, hintQuestionError, createQuestion, createQuestionError);

    const country = document.querySelector("#country");
    const countryError = document.getElementById("country-error");

    isValid = isValid && isCountry(country, countryError, "Country");

    const city = document.querySelector("#city");
    const cityError = document.getElementById("city-error");

    isValid = isValid && isCity(city, cityError, "City");

    if(!!isValid){
     alert("Validation success!");
    }

    return !!isValid;
}

function isCity(inputCity, cityErrorField, cityTag){
 return isCountry(inputCity, cityErrorField, cityTag);
}

function isCountry(inputCountry, errorField, countryTag){

    if(inputCountry.value.trim() == ""){
     errorField.textContent = countryTag + " must be required";
     return false;
    }
    return true;
}

function isHintQuesAns(inputHintQuestion, hintQuestionErrorField, inputCreateQuestion, createQuestionErrorField){
 if(inputHintQuestion.value.trim() == "" && inputCreateQuestion.value.trim() == ""){
    hintQuestionErrorField.textContent = "Hint Question must not be empty OR Create Question";
    return false;
 }

 return true;
}

function isFullName(inputFirstName, firstNameErrorField, inputLastName, lastNameErrorField){
    const nameRegex = /^[A-Za-z][A-Za-z_]*$/;

    if(inputFirstName.value.trim() == ""){
    firstNameErrorField.textContent = "First Name must be required"; 
    return false;
    }
    else if(inputLastName.value.trim() == ""){
    lastNameErrorField.textContent = "Last Name must be required";
    return false;  
    }

    if(!nameRegex.test(inputFirstName.value.trim()) || !nameRegex.test(inputLastName.value.trim())){
      firstNameErrorField.textContent = "Name should not contain any number"; 
    return false;
    }

    return true;
}

function isName(inputLoginName, loginNameErrorField){
    const nameRegex = /^[A-Za-z][A-Za-z0-9_]*$/;

    if(inputLoginName.value.trim() == ""){
    loginNameErrorField.textContent = "Login Name must be required"; 
    return false;
    }

    if(!nameRegex.test(inputLoginName.value.trim())){
      firstNameErrorField.textContent = "Login Name should not start with number or special letters"; 
    return false;
    }

    return true;
}

function isPass(inputPassword, inputRePassword, passwordErrorField, rePpasswordErrorField){
    if(inputPassword.value.trim() == ""){
    passwordErrorField.textContent = "Password must not be empty";
    return false;
    }
    else if(inputRePassword.value.trim() == ""){
        rePpasswordErrorField.textContent = "Password must not be empty";
        return false;
    }
    if(inputPassword.value.trim() != inputRePassword.value.trim()){
    rePpasswordErrorField.textContent = "Password must be match";
    return false;
    }

    return true;
}

function isDate(inputMonth, inputDay, inputYear, errorField){

    if(inputMonth.value.trim() == "" || inputDay.value.trim() == "" || inputYear.value.trim() == ""){
     errorField.textContent = "At least One Field is must be required";
     return false;
    }
    return true;
}