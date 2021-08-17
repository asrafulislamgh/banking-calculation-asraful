document.getElementById("submit").addEventListener("click", function () {
  const inputEmail = document.getElementById("input-email");
  const inputPass = document.getElementById("input-pass");
  if (inputEmail.value == "gdmamun@yahoo.com" && inputPass.value == "asra") {
    window.location.href = "another-page.html";
  } else {
    let errorText = document.getElementById("error-text");
    errorText.innerText = "Wrong email or password!";
    errorText.style.color = "red";
  }
});
