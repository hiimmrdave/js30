"use strict";

// NOTE: KeyboardEvent.key is case sensitive
const drumKey = e => {
  const div = document.querySelector(`div#${e.key}`);
  if (!div) return;
  const audio = document.querySelector(`audio[data-key="${e.key}"]`)
  div.classList.add("hilit");
  audio.currentTime=0;
  audio.play();
};
const pullClass = ({target}) => {
  target.classList.remove("hilit");
}

window.addEventListener("keypress",drumKey)


const keys = document.querySelectorAll("main div");
keys.forEach( key => { key.addEventListener("transitionend",pullClass) });
