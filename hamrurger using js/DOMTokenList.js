// let mainSection = document.getElementById("demoSection");
// console.log(mainSection);

// mainSection.className = "active"
// mainSection.setAttribute("class", "demo")

// DOMTokenList
// mainSection.classList.add()
// mainSection.classList.remove()
// mainSection.classList.toggle()
// mainSection.classList.contains()
// mainSection.classList.entries()
// mainSection.classList.values()
// mainSection.classList.forEach()
// console.log(mainSection.classList);
// mainSection.classList.add("demo", "qsp", "testYantra")

// let text = document.getElementById("block");
// let showBtn = document.getElementById("showBtn");
// let hideBtn = document.getElementById("hideBtn");

// showBtn.onclick = function () {
//     text.classList.add("active")
//     text.style.display="block"
// }

// hideBtn.onclick = function () {
//   text.classList.remove("active");
//   text.style.display = "none";
// };

// showBtn.onclick = function () {
//   if (text.classList.contains("active")) {
//     text.style.display = "block";
//   }
// };

// hideBtn.onclick = function () {
//   text.style.display = "none";
// };

// let text = document.getElementById("block");
// let btn1 = document.getElementById("btn1");

// btn1.onclick = function () {
//   let toggle = text.classList.toggle("active");
//   if (!toggle) {
//     text.style.display = "none";
//     btn1.innerHTML = "SHOW";
//   } else {
//     text.style.display = "block";
//     btn1.innerHTML = "HIDE";
//   }
// };

// let dropMain = document.getElementById("dropMain");

let dropBlock = document.getElementById("dropBlock");
let aside = document.getElementById("dropdown");

dropBlock.onmouseenter = function () {
  let toggle = aside.classList.toggle("dropdown");
  if (toggle) {
    aside.style.display = "block";
    // dropBlock.style.transitionDuration = "1s";
  }
  else {
    aside.style.display = "none";
    dropBlock.style.transitionDuration = "1s";
  }
};



// Hamburger Menu Bar
let contentMenu = document.getElementById("contentMenu");
let btnHam = document.getElementById("hamBlock");

contentMenu.style.fontSize = "25px";
contentMenu.style.background = "lightblue";
contentMenu.style.width = "290px";
contentMenu.style.color = "red";
contentMenu.style.padding = "20px 10px 20px 70px";
contentMenu.style.position = "absolute";
contentMenu.style.top = "100px";
contentMenu.style.left = "-291px";

btnHam.onclick = function () {
  let toggle = contentMenu.classList.toggle("dropdown");
  if (toggle) {
    contentMenu.style.left = "0px";
    btnHam.innerHTML = `<i class="fa-solid fa-x"></i>`;
    btnHam.style.background = "transparent";
    btnHam.style.transitionDuration = "0.6s";
  } else {
    contentMenu.style.left = "-300px";
    btnHam.style.transitionDuration = "2s";
    btnHam.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    btnHam.style.background = "white";
  }
};

// videoBlock
// let video = document.querySelector("video");
// let btnPlay = document.querySelector("btnPlay");

// btnPlay.onclick = function () {
//   let toggle = video.classList.toggle("video");
//   if (!toggle) {
//     video.play();
//     this.innerHTML = "Pause";
//   } else {
//     video.pause();
//     this.innerHTML = "Play";
//   }
// };

let audio = document.getElementById("audio");
let imgPlay = document.getElementById("imagePlay");
imgPlay.onclick = function () {
    let toggle = audio.classList.toggle("audio");
  if (toggle) {
  audio.play()
  }
  else {
    audio.pause()
  }
}

