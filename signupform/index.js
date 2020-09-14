submitbtn = document.getElementById("sub-btn");

function validateForm(e) {
  let count_green = 0;
  let name = document.getElementById("fname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let password = document.getElementById("password");
  let cpassword = document.getElementById("cpassword");
  e.preventDefault();
  validateName(name);
  validateEmail(email);
  validatePhone(phone);
  validatePassword(password);
  validateCPassword(password, cpassword);

  let renderForm = document.querySelector("form");

  for (let i = 0; i < 5; i++) {
    let color_value = renderForm[i].style.borderColor;
    if (color_value == "green") {
      count_green++;
    }
  }
  console.log(count_green);
  if (count_green === 5) {
    swal({
      title: "Welcome ",
      text: `${name.value}`,
      icon: "success",
      button: "Ok",
    });
    name.value = "";
    email.value = "";
    password.value = "";
    cpassword.value = "";
    phone.value = "";
  }
}
submitbtn.addEventListener("click", validateForm);
function raiseError(element, error_msg) {
  element.parentElement.children[2].style.visibility = "hidden";
  element.style.border = "2px solid red";

  element.parentElement.children[4].innerText = error_msg;
  element.parentElement.children[3].style.visibility = "visible";
}
function markcorrect(element, msg) {
  element.parentElement.children[3].style.visibility = "hidden";
  element.parentElement.children[4].innerText = msg;
  let parent = element.parentElement;
  parent.children[2].style.color = "green";
  console.log();
  element.style.borderColor = "green";
  parent.children[2].style.visibility = "visible";
}
function validateName(name) {
  let name_val = name.value.trim();

  if (name_val == "") {
    raiseError(name, "Please Write your name");
  } else {
    markcorrect(name, "correct Name");
  }
}

function validateEmail(email) {
  let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let email_val = email.value.trim();
  if (email_val == "") {
    raiseError(email, "Please write your email");
  } else if (email_val[0] == "@") {
    raiseError(email, "Can't start with '@'");
  } else if (!email_val.match(pattern)) {
    raiseError(email, "Not a valid Email");
  } else {
    markcorrect(email, "Email Satisfies");
  }
}
function validatePhone(phone) {
  let pattern = /^\d{10}$/;
  let phone_val = phone.value.trim();
  if (phone_val.match(pattern)) {
    markcorrect(phone, "Phone Number satisfies");
  } else {
    raiseError(phone, "Not a valid Number");
  }
}
function validatePassword(password) {
  let pass_value = password.value.trim();
  if (pass_value.length < 5) {
    raiseError(password, "Very Short password");
  } else {
    markcorrect(password, "Password satisfies");
  }
}
function validateCPassword(password, cpassword) {
  let pass_value = password.value.trim();
  let cpass_value = cpassword.value.trim();
  if (cpass_value != pass_value || cpass_value == "") {
    raiseError(cpassword, "Password Doesn't match");
  } else {
    markcorrect(cpassword, "Password matches");
  }
}
