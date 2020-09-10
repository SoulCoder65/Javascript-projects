allbtns = document.querySelectorAll(".btn-lg");
textfield = document.getElementById("Textarea");
for (let i = 0; i < allbtns.length; i++) {
  console.log(allbtns[i]);
  allbtns[i].addEventListener("click", checkpress);
}

function checkpress(e) {
  char = e.originalTarget.childNodes[0].data;
  ch = e.explicitOriginalTarget.id;
  console.log(ch);
  if (ch == "back-space" || ch == "backspace") {
    data = textfield.innerHTML;
    textfield.innerHTML = data.slice(0, data.length - 1);
  } else if (ch == "space" || ch == "crop_16_9") {
    textfield.innerHTML += " ";
  } else if (
    typeof char == "undefined" ||
    typeof char == "check_circle" ||
    typeof char == "keyboard_capslock" ||
    char == "keyboard_capslockQ" ||
    char == "backspace"
  ) {
  } else {
    console.log(char);
    textfield.innerHTML += char;
  }
}
let caps = document.querySelector("#capslock");

caps.addEventListener("click", function () {
  status = caps.classList.toggle("on-off");

  if (status) {
    changeToUpper();
  }
  if (status == "false") {
    changeToLower();
  }
});
function changeToUpper(params) {
  for (let i = 0; i < allbtns.length; i++) {
    let value = allbtns[i].innerHTML;
    if (value.length == 1) {
      if (value == "1") {
        allbtns[i].innerHTML = "!";
      } else if (value == "2") {
        allbtns[i].innerHTML = "@";
      } else if (value == "3") {
        allbtns[i].innerHTML = "#";
      } else if (value == "4") {
        allbtns[i].innerHTML = "$";
      } else if (value == "5") {
        allbtns[i].innerHTML = "%";
      } else if (value == "6") {
        allbtns[i].innerHTML = "^";
      } else if (value == "7") {
        allbtns[i].innerHTML = "&";
      } else if (value == "8") {
        allbtns[i].innerHTML = "*";
      } else if (value == "9") {
        allbtns[i].innerHTML = "(";
      } else if (value == "0") {
        allbtns[i].innerHTML = ")";
      } else if (value == ",") {
        allbtns[i].innerHTML = "<";
      } else if (value == ".") {
        allbtns[i].innerHTML = ">";
      } else if (value == "?") {
        allbtns[i].innerHTML = "/";
      } else {
        allbtns[i].innerHTML = value.toUpperCase();
      }
    }
  }
}
function changeToLower() {
  for (let i = 0; i < allbtns.length; i++) {
    let value = allbtns[i].innerHTML;
    if (value.length == 1) {
      if (value == "!") {
        allbtns[i].innerHTML = "1";
      } else if (value == "@") {
        allbtns[i].innerHTML = "2";
      } else if (value == "#") {
        allbtns[i].innerHTML = "3";
      } else if (value == "$") {
        allbtns[i].innerHTML = "4";
      } else if (value == "%") {
        allbtns[i].innerHTML = "5";
      } else if (value == "^") {
        allbtns[i].innerHTML = "6";
      } else if (value == "&") {
        allbtns[i].innerHTML = "7";
      } else if (value == "*") {
        allbtns[i].innerHTML = "8";
      } else if (value == "(") {
        allbtns[i].innerHTML = "9";
      } else if (value == ")") {
        allbtns[i].innerHTML = "0";
      } else if (value == "<") {
        allbtns[i].innerHTML = ",";
      } else if (value == ">") {
        allbtns[i].innerHTML = ".";
      } else if (value == "/") {
        allbtns[i].innerHTML = "?";
      } else {
        allbtns[i].innerHTML = value.toLowerCase();
      }
    }
  }
}
