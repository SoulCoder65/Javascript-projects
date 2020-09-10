generate_field = document.getElementById("generate-pass-field"); 
password_length = document.getElementById("pass-length");
uppercheck = document.getElementById("customCheck1");
lowercheck = document.getElementById("customCheck2");
numberscheck = document.getElementById("customCheck3");
symbolcheck = document.getElementById("customCheck4");
generatebtn = document.querySelector(".btn-block");
copy_btn = document.getElementById("copy-btn");
popup_bar = document.getElementsByClassName("alert-popup-before")[0];

// Generate random Uppercase
function uppercaseGen() {
  ran_num = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
  return ran_num;
}
// Generate random Lowercase
function lowercaseGen() {
  ran_num = String.fromCharCode(
    Math.floor(Math.random() * (122 - 97 + 1)) + 97
  );
  return ran_num;
}
// Generate random Numbercase
function numberGen() {
  ran_num = Number.parseInt(Math.random() * 10);
  return ran_num;
}
// Generate random Special Symbols
function symbolGen() {
  var symbols = "!@#$^&*(){}=<>/,.";
  ran_num = Number.parseInt(Math.random() * 15);
  return symbols[ran_num];
}
// Copy value
function copyValue() {
  popup_bar.setAttribute("class", "alert-popup");
  popup_bar.innerHTML = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
    <strong>Password Copy to clipboard</strong> 
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
  str = generate_field.value;
  generate_field.dataToggle = "tooltip";
  generate_field.dataPlacement = "sdah";
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

function generateRandomPass(e) {
  e.preventDefault();
  checked_list = [];
  if (uppercheck.checked) {
    checked_list.push("uppercaseGen");
  }
  if (lowercheck.checked) {
    checked_list.push("lowercaseGen");
  }
  if (numberscheck.checked) {
    checked_list.push("numberGen");
  }
  if (symbolcheck.checked) {
    checked_list.push("symbolGen");
  }
  check_len = checked_list.length;

  var element = "";
  for (let i = 0; i < password_length.value; i++) {
    ran_choice = Number.parseInt(Math.random() * check_len);
    choice = checked_list[ran_choice];
    element += genpass(eval(choice));
  }
  generate_field.value = element;
}

function genpass(choice) {
  return choice();
}

generatebtn.addEventListener("click", generateRandomPass);
copy_btn.addEventListener("click", copyValue);
