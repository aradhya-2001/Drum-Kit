// snehil code:-

// const playAudio = function (filename) {
//   return function () {
//     var aud = new Audio(filename);
//     aud.play();
//   };
// };
// var n = document.querySelectorAll(".drum").length;
// for (var i = 0; i < n; i++) {
//   document
//     .querySelectorAll("button")
//     [i].addEventListener("click", playAudio("sounds/sound-" + i + ".mp3"));
// }

document.addEventListener("keydown", function (e) {
  let keyy=e.key;
  keyy=keyy.toLowerCase();
  makeSound(keyy);
  animation(keyy);
});
for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var b = this.innerText;
    makeSound(b);
    animation(b);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      var aud = new Audio("sounds/sound-0.mp3");
      aud.play();
      break;
    case "a":
      var aud = new Audio("sounds/sound-1.mp3");
      aud.play();
      break;
    case "s":
      var aud = new Audio("sounds/sound-2.mp3");
      aud.play();
      break;
    case "d":
      var aud = new Audio("sounds/sound-3.mp3");
      aud.play();
      break;
    case "j":
      var aud = new Audio("sounds/sound-4.mp3");
      aud.play();
      break;
    case "k":
      var aud = new Audio("sounds/sound-5.mp3");
      aud.play();
      break;
    case "l":
      var aud = new Audio("sounds/sound-6.mp3");
      aud.play();
      break;
  }
}

function animation(key) {
  var a = document.querySelector("." + key).classList;
  a.add("pressed");
  setTimeout(function () {
    a.remove("pressed");
  }, 500);
}
