player_score = document.getElementById("player-score");
computer_score = document.getElementById("computer-score");
rock_id = document.getElementById("rock");
paper_id = document.getElementById("paper");
scissor_id = document.getElementById("scissors");
model_label_winner = document.getElementsByClassName("modal-body")[0];
reset_btn = document.getElementById("reset-btn");
var play_score = 0;
var comp_score = 0;
function show_winner(e) {
  reset_btn.style.display = "inline-block";
  reset_btn.style.marginBottom = "1%";

  winner_label = check_winner(e);
  model_label_winner.innerHTML = `
  <div class="text-center">
  <h3>${winner_label[0]}</h3>
  <i class="fas fa-hand-${winner_label[1]} fa-10x col-md-4"></i>
  <h4>Computer Chooses ${winner_label[1]}</h4>
  </div>`;
  if (winner_label[0] == "YOU WON!!") {
    player_score.innerHTML = `<p>Player Score ${play_score}</p>`;
  } else if (winner_label[0] == "YOU LOSE") {
    computer_score.innerHTML = `<p>Computer Score ${comp_score}</p>`;
    console.log(computer_score.innerHTML);
  }
}
function check_winner(e) {
  user_play = e.target.id;
  computer_play = computermove();

  if (user_play == computer_play) {
    return ["It's Tie", computer_play];
  } else if (user_play == "scissors") {
    if (computer_play == "paper") {
      play_score++;
      return ["YOU WON!!", computer_play];
    } else {
      comp_score++;
      return ["YOU LOSE", computer_play];
    }
  } else if (user_play == "paper") {
    if (computer_play == "scissors") {
      comp_score++;
      return ["YOU LOSE", computer_play];
    } else {
      play_score++;
      return ["YOU WON!!", computer_play];
    }
  } else if (user_play == "rock") {
    if (computer_play == "scissors") {
      play_score++;
      return ["YOU WON!!", computer_play];
    } else {
      comp_score++;
      return ["YOU LOSE", computer_play];
    }
  }
}
function computermove() {
  comp_move = Number.parseInt(Math.random() * 10);
  if (comp_move <= 4) {
    return "rock";
  } else if (comp_move <= 8) {
    return "paper";
  } else {
    return "scissors";
  }
}

function reset_value() {
  comp_score = 0;
  play_score = 0;
  player_score.innerHTML = `<p>Player Score ${play_score}</p>`;
  computer_score.innerHTML = `<p>Computer Score ${comp_score}</p>`;
}
scissor_id.addEventListener("click", show_winner);
rock_id.addEventListener("click", show_winner);
paper_id.addEventListener("click", show_winner);
reset_btn.addEventListener("click", reset_value);
