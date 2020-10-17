// Getting Dom elements
let guessField = document.getElementById("guessBox");
let startBtn = document.getElementById("playBtn");
let gameText = document.getElementById("gameText");
let gamestart = false;
// Function to shuffle word
const ScrambleName = (name) => {
  let array = name.split("");
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// Fun Generate Random words
const GenerateRandomWords = () => {
  const dataList = [
    "python",
    "flutter",
    "reactjs",
    "android",
    "swift",
    "kotlin",
    "cpp",
    "java",
    "javascript",
    "dart",
    "sql",
    "mongodb",
    "django",
    "flask",
    "php",
    "html",
  ];

  let randomName = dataList[Math.floor(Math.random() * dataList.length)];
  let ran = randomName;
  let scram = ScrambleName(randomName).join("");
  return [ran, scram];
};

// function call when start btn press
startBtn.addEventListener("click", () => {
  if (!gamestart) {
    gamestart = true;
    [name, ranName] = GenerateRandomWords(); //GEt random word
    startBtn.innerHTML = "Guess";
    guessField.classList.toggle("hide");
    gameText.innerHTML = `Guess The Word ${ranName} `;
  } else {
    let playervalue = guessField.value;
    if (playervalue === name) {
      console.log(name);
      gamestart = false;
      gameText.innerHTML = "You Won";
      startBtn.innerHTML = "Start Again";
      guessField.value = "";
      guessField.classList.toggle("hide");
    } else {
      guessField.value = "";
      gameText.innerHTML = `Wrong,Guess Again- ${ranName}`;
    }
  }
});
