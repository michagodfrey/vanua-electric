const sender = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
// const loading = document.getElementById('loading');

// todo - set up for vec894@gmail.com. 

// Send email function from https://www.emailjs.com/
window.onload = function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (sender.value === "" || email.value === "" || message.value === "") {
      alert("Please complete name, email and message fields.");
    } else {
      // loading.style.display = "flex";
      // log in https://dashboard.emailjs.com to get service id and user id
      emailjs.sendForm("service_4dftmcc", "contact_form", this).then(
        function () {
          // loading.style.display = "none";
          alert(
            `Sent! Thank you for the message and we will get back to you as soon as possible. A copy has been sent to ${email.value}, you may need to check your spam folder.`
          );
          sender.value = "";
          email.value = "";
          message.value = "";
          // location.href = "index.html";
        },
        function (error) {
          // loading.style.display = "none";
          alert(
            "Well this is embarrassing :( Sorry about that. Please email us at vec894@gmail.com instead.",
            error
          );
          // location.href = "index.html";
        }
      );
    }
  });
};
