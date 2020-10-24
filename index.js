const submitForm = document.querySelector("#submit-form");
const thankYouDiv = document.querySelector("#thank-you");
const myForm = document.querySelector("#contact");

function onSubmit(event) {
    event.preventDefault(); 
    const name = document.forms["myForm"]["full-name"].value;
    const email = document.forms["myForm"]["email-address"].value;
    const message = myForm.elements["message"].value;
    thankYouDiv.innerHTML = "";
    if (name !== "" && email !== "" && message !== "") {
        myForm.style = "display: none; height: 0; overflow: hidden;"; 
        document.forms["myForm"]["full-name"].value = null;
        document.forms["myForm"]["email-address"].value = null;
        myForm.elements["message"].value = null;
        thankYouDiv.style = "display: block; overflow: visible; padding: 20px 0 0 20px;"; 
        thankYouDiv.innerHTML = "Thank you for reaching out. You will hear from me soon. <button type=\"submit\" id=\"back-to-form\">Back to form</button>";
    }
    const backButton = document.querySelector("#back-to-form");
    backButton.addEventListener("click", backToForm); 
}

function backToForm(event) {
    event.preventDefault(); 
    thankYouDiv.innerHTML = "";
    thankYouDiv.style = "display: none; overflow: hidden; height: inherit; width: inherit;";
    myForm.style = "display: block; padding: 40px 0 0 60px;";
    console.log("Here"); 
}
 
submitForm.addEventListener("click", onSubmit); 