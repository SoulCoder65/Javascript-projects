var score = 0; //Initialise score
var flag = true; //for controlling score
// Play sounds
var sound = new Howl({
  src: ["sounds/harrymusic.mp3"],
  autoplay: true,
  loop: true,
  volume: 0.5,
});
// Game over sound
var gameoversound = new Howl({
  src: ["sounds/game-over.mp3"],
  autoplay: true,
  loop: false,
  volume: 0.5,
});
sound.play();
// Getting all elements
var score_class = document.getElementsByClassName("score")[0];
var enemy_div = document.querySelector(".enemy");
var player_div = document.querySelector(".player");
var title = document.querySelector(".title");
var gameover = document.querySelector(".gameover");
playerStyle = window.getComputedStyle(player_div, null);

// Check player movements
document.onkeydown = function checkKey(e) {
  if (e.key === "w" || e.key === "ArrowUp") {
    player_div.classList = "player-move";
    setTimeout(() => {
      player_div.classList = "player";
    }, 1000);
  } else if (e.key === "a" || e.key === "ArrowLeft") {
    player_div.style.left = Number.parseFloat(playerStyle.left) - 10 + "px";
  } else if (e.key === "d" || e.key === "ArrowRight") {
    player_div.style.left = Number.parseFloat(playerStyle.left) + 115 + "px";
  }
};
// check collison
setInterval(() => {
  player_divl = document.getElementById("player-id");
  enemy_divl = document.getElementById("enemy-id");
  dx = parseInt(
    window.getComputedStyle(player_divl, null).getPropertyValue("left")
  );
  dy = parseInt(
    window.getComputedStyle(player_divl, null).getPropertyValue("top")
  );
  ox = parseInt(
    window.getComputedStyle(enemy_divl, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(enemy_divl, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  if (offsetX < 80 && offsetY < 140) {
    gameover.classList = "gameover-visible";
    enemy_div.classList = "enemy-gameover";
    player_div.classList = "player-gameover";
    setTimeout(() => {
      gameoversound.play();
      sound.pause();
    }, 100);
  }

  // Updating score
  else if (offsetX > 20 && offsetX < 140 && flag) {
    score++;
    score_class.innerHTML = `Score:${score}`;
    flag = false;
    setTimeout(() => {
      flag = true;
    }, 1000);
  }
}, 100);
$(document).ready(function () {
  title.classList = "title-animation";
});
enemyspeed = parseFloat(
  window.getComputedStyle(enemy_div, null).animationDuration
);
if (enemyspeed < 3) {
} else {
  setTimeout(() => {
    enemyspeed = parseFloat(
      window.getComputedStyle(enemy_div, null).animationDuration
    );
    new_duration = enemyspeed - 0.4 + "s";
    enemy_div.style.animationDuration = new_duration;
  }, 1000);
}
setTimeout(() => {
  title.classList = "";
}, 4000);
