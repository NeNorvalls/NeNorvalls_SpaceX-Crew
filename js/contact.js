function validateForm() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding= "10px";

    var text;
    if(name.length < 1) {
        text = "Please enter valid name";
        error_message.innerHTML = text;
        return false;
    }
    if(address.length < 25) {
        text = "Please enter valid address";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 0) {
        text = "Please enter valid email";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 10) {
        text = "Please enter valid subject"
        error_message.innerHTML = text;
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}