numb_of_songs = document.querySelectorAll(".col-md-4").length;
for (let i = 0; i < numb_of_songs; i++) {
  document
    .querySelectorAll(".col-md-4")
    [i].addEventListener("click", musicplay);
  document
    .querySelectorAll(".col-md-4")
    [i].addEventListener("dblclick", pauseplay);
}
var list_music = [];
var music1 = new Audio();

function musicplay() {
  music1.pause();
  song = this.firstElementChild.src;
  song_img_name = song.split("/");
  song_name = song_img_name[4].split(".")[0];
  console.log(song_name);
  music1.src = `/songs/${song_name}.mp3`;
  list_music.push(song_name);
  music1.play();
  return music1;
}
function pauseplay() {
  music1.pause();
}
