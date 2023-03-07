const btn = document.querySelector(".sendMail");
const succeessAlert = document.getElementById("succeessAlert");
const failAlert = document.getElementById("failAlert");

document
  .getElementById("formCard")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_b7a3gdq";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        succeessAlert.style.display = "block";
        console.log('done');
      },
      (err) => {
        btn.value = "Send Email";
        failAlert.style.display = "block";
        console.log('fail');
      }
    );
  });
