function onSubmit(event) {
    event.preventDefault(); 
    const name = form.elements["full-name"].value;
    const email = form.elements["email-address"].value;
    const message = form.elements["message"].value;
    document.getElementById("thank-you").innerHTML = "";
    if (name == "" || email == "" || message == "") {
        document.getElementById("thank-you").innerHTML = "Please complete all form fields.";
    }
    else {
        document.getElementById("thank-you").innerHTML = "Thank you for reaching out. You will hear from me soon.";
    }
}

form.addEventListener("submit", onSubmit);