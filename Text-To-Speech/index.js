// Init SpeechSynth Api
const synth = window.speechSynthesis;
// DOM
const textInput = document.getElementById("text-value");
const rate = document.getElementById("rate");
const pitch = document.getElementById("pitch");
const searchbtn = document.getElementsByClassName("btn-large")[0];
const selectField = document.querySelector("select");

// Select Field Plugins
options = {};
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, options);
});
// Get Differents Voice
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();
  //   Add fetched voices to select fields
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    selectField.appendChild(option);
  });
};
getVoices();

const textTospeech = () => {
  if (synth.speaking) {
    console.log("Speaking..... Wait!!!");
    return;
  }
  if (textInput.value != "") {
    //   Get Text to speak
    const speaktext = new SpeechSynthesisUtterance(textInput.value);
    speaktext.onend = (e) => {
      console.log("Speak Completed");
    };
    speaktext.onerror = (e) => {
      console.error("Wrong");
    };
    // Select voice
    const selectedVoice = selectField.selectedOptions[0].getAttribute(
      "data-name"
    );
    // Check Voice matches
    voices.forEach((voice) => {
      if (voice.name === selectedVoice) {
        speaktext.voice = voice;
      }
    });
    // Set Pitch and rate
    speaktext.rate = rate.value;
    speaktext.pitch = pitch.value;
    synth.speak(speaktext);
  }
};
searchbtn.addEventListener("click", () => {
  textTospeech();
});
selectField.addEventListener("change", () => {
  textTospeech();
});
