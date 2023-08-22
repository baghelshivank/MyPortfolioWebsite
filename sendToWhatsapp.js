function sendToWhatsapp() {
  var name = document.getElementById("form-name").value;
  var email = document.getElementById("form-email").value;
  var msg = document.getElementById("form-msg").value;

  var url =
    "https://wa.me/917987388402?text=" +
    "Name: " +
    name +
    "%0a" +
    "Email: " +
    email +
    "%0a" +
    "Message: " +
    msg;

  window.open(url, "_blank").focus();
}
