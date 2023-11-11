"use strict";

const page = jQuery(document.body).data("page");

/**start-Season Episode of music-galary**/

for (let i of document.querySelectorAll(".aWrap")) {
  // (B) AUDIO + HTML SETUP + FLAGS
  i.audio = new Audio(encodeURI(i.dataset.src));
  (i.aPlay = i.querySelector(".aPlay")),
    (i.aPlayIco = i.querySelector(".aPlayIco")),
    (i.aSeek = i.querySelector(".aSeek")),
    (i.seeking = false); // user is dragging the seek bar

  // (C1) CLICK TO PLAY/PAUSE
  i.aPlay.onclick = () => {
    if (i.audio.paused) {
      i.audio.play();
    } else {
      i.audio.pause();
    }
  };

  // (C2) SET PLAY/PAUSE ICON
  i.audio.onplay = () => (i.aPlayIco.innerHTML = '<i class="fa fa-pause"></i>');
  i.audio.onpause = () =>
    (i.aPlayIco.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <circle cx="16.0672" cy="16.0672" r="16.0672" fill="black" />
      <path
        d="M22.2032 16.208C22.5365 16.4004 22.5365 16.8815 22.2032 17.074L14.235 21.6744C13.9017 21.8669 13.485 21.6263 13.485 21.2414L13.485 12.0405C13.485 11.6556 13.9017 11.4151 14.235 11.6075L22.2032 16.208Z"
        fill="#FFDA17"
      />
    </svg>`);

  i.audio.onloadedmetadata = () => {
    // (D2-2) SET SEEK BAR MAX TIME
    i.aSeek.max = Math.floor(i.audio.duration);

    // (D2-3) USER CHANGE SEEK BAR TIME
    i.aSeek.oninput = () => (i.seeking = true);
    i.aSeek.onchange = () => {
      i.audio.currentTime = i.aSeek.value;
      if (!i.audio.paused) {
        i.audio.play();
      }
      i.seeking = false;
    };

    // (D2-4) UPDATE SEEK BAR ON PLAYING
    i.audio.ontimeupdate = () => {
      if (!i.seeking) {
        i.aSeek.value = Math.floor(i.audio.currentTime);
      }
      let divisionNumber = i.aSeek.getAttribute("max") / 100;
      let rangeNewWidth = Math.floor(i.aSeek.value / divisionNumber);
      if (rangeNewWidth > 95) {
        i.aSeek.nextSibling.style.width = "95%";
      } else {
        i.aSeek.nextSibling.style.width = rangeNewWidth + "%";
      }
    };
  };

  // (F) ENABLE/DISABLE CONTROLS
  i.audio.oncanplaythrough = () => {
    i.aPlay.disabled = false;
    i.aSeek.disabled = false;
  };
}
/**testimonial**/
const next = document.querySelector(".right");
const prev = document.querySelector(".left");
const slides = document.querySelectorAll(".slide");

let index = 0;
slider(index);

function slider(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

next.addEventListener("click", (e) => {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  slider(index);
});

prev.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  slider(index);
});
