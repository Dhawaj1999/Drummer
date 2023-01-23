// detecting button key
// we are using loop to access every button for drum
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // this helps in selecting the keyword of button and changing its property
    var button = this.innerHTML;
    makeSound(button);
    animation(button);
  });
// detect keyboard button and play sound using makesound() function
  document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animation(event.key);
  });
}


// play sound based on button click
function makeSound(key){
  switch (key) {

  case "w":
  // this fucntionality we are using in javascript to play sound using HTML audio element
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

  case "a":
    var kickbass = new Audio("sounds/kick-bass.mp3");
    kickbass.play();
    break;

  case "s":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

  case "d":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

  case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

  case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

  case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
}
}

// Animation
function animation(keyNow){
  var buttonPressed = document.querySelector("." + keyNow);
  buttonPressed.classList.add("pressed");
  setTimeout(function(){
  buttonPressed.classList.remove("pressed");
}, 100);
}
