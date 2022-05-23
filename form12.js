function validateForm() {

    var firstName = document.forms["myForm"]["firstname"];
    var lastName = document.forms["myForm"]["lastName"]
    var emailaddress = document.forms["myForm"]["emailaddress"];
    var jobtitle = document.forms["myForm"]["jobtitle"];
    var storytext = document.forms["myForm"]["storytext"];
    let firstNameError = document.getElementById("firstNameError")
    let lastNameError = document.getElementById("lastNameError")
    let emailaddressError = document.getElementById("emailError")
    let jobtitleError = document.getElementById("jobtitleError")
    let storytextError = document.getElementById("storytextError")
    let storytype = document.getElementById("storytype")
    let storytypeError = document.getElementById("storytypeError")

    if (firstName.value === "") {

        //if(firstNameData === ""){           
        firstNameError.innerHTML = "Please enter a first name"; //shorthand

        firstName.style.borderColor = "#f44242";
        firstNameError.style.borderColor = "#f44242";
        return false;
    } else {
        firstName.style.borderColor = "#62f441";
        firstNameError.innerHTML = "✓";
        firstNameError.style.borderColor = "#62f441";
    }

    if (lastName.value === "") {

        //if(firstNameData === ""){           
        lastNameError.innerHTML = "Please enter last name"; //shorthand

        lastName.style.borderColor = "#f44242";
        lastNameError.style.borderColor = "#f44242";
        return false;
    } else {
        lastName.style.borderColor = "#62f441";
        lastNameError.innerHTML = "✓";
        lastNameError.style.borderColor = "#62f441";

    }

    if (emailaddress.value === "") {

        //if(firstNameData === ""){           
        emailaddressError.innerHTML = "Please enter a vaild email"; //shorthand

        emailaddress.style.borderColor = "#f44242";
        emailaddressError.style.borderColor = "#f44242";
        return false;
    } else {
        emailaddress.style.borderColor = "#62f441";
        emailaddressError.innerHTML = "✓";
        emailaddressError.style.borderColor = "#62f441";


    }


    if (jobtitle.value === "") {

        //if(firstNameData === ""){           
        jobtitleError.innerHTML = "Please enter a job"; //shorthand

        jobtitle.style.borderColor = "#f44242";
        jobtitleError.style.borderColor = "#f44242";
        return false;
    } else {
        jobtitle.style.borderColor = "#62f441";
        jobtitleError.innerHTML = "✓";
        jobtitleError.style.borderColor = "#62f441";

    }


    if (storytype.value == 'nothing') {
        storytypeError.innerHTML = "Please enter a value"; //shorthand
        storytype.style.borderColor = "#f44242";
        storytypeError.style.borderColor = "#f44242";
        return false;
    } else {
        storytype.style.borderColor = "#62f441";
        storytypeError.innerHTML = "✓";
        storytypeError.style.borderColor = "#62f441";
    }

    if (storytext.value === "") {

        //if(firstNameData === ""){           
        storytextError.innerHTML = "Please enter text"; //shorthand

        storytext.style.borderColor = "#f44242";
        storytextError.style.borderColor = "#f44242";
        return false;
    } else {
        storytext.style.borderColor = "#62f441";
        storytextError.innerHTML = "✓";
        storytextError.style.borderColor = "#62f441";

    }
    return true;
    console.log("test");
    console.log(event);

    event.preventDefault();
}