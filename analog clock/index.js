hour_hand = document.getElementById("hour");
min_hand = document.getElementById("minute");
sec_hand = document.getElementById("second");
console.log(hour_hand, min_hand, sec_hand);

setInterval(() => {
  da = new Date();
  hr = da.getHours();
  min = da.getMinutes();
  sec = da.getSeconds();
  hrrotation = 30 * hr + min / 2;
  minrotate = 6 * min;
  secrotate = 6 * sec;
  hour_hand.style.transform = `rotate(${hrrotation}deg)`;
  min_hand.style.transform = `rotate(${minrotate}deg)`;
  sec_hand.style.transform = `rotate(${secrotate}deg)`;
}, 1000);
