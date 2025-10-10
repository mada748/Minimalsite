var button = document.getElementById("escape-button");
var proximity = 300;
var isButtonMoving = false;

function moveButton() {
  if (isButtonMoving) {
    return;
  }

  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  var buttonWidth = button.offsetWidth;
  var buttonHeight = button.offsetHeight;

  var currentX = parseInt(button.style.left) || 0;
  var currentY = parseInt(button.style.top) || 0;

  var randomX, randomY;
  var minDistance = proximity + 50;

  do {
    randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth));
    randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight));
  } while (calculateDistance(currentX, currentY, randomX, randomY) < minDistance);

  if (randomX + buttonWidth > viewportWidth) {
    randomX = viewportWidth - buttonWidth;
  }
  if (randomY + buttonHeight > viewportHeight) {
    randomY = viewportHeight - buttonHeight;
  }

  button.style.transition = "left 0.5s, top 0.5s";
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";

  isButtonMoving = true;

  button.addEventListener("transitionend", function() {
    isButtonMoving = false;
    updateButtonText();
  }, { once: true });
}


function calculateDistance(mouseX, mouseY, buttonX, buttonY) {
  var dx = mouseX - buttonX;
  var dy = mouseY - buttonY;
  return Math.sqrt(dx * dx + dy * dy);
}

function updateButtonText() {
  var texts = [
    "YOUR ANDROID IS HERE",
    "C'mon is only a .apk",
    "I can do this forever",
    "You're so close!",
    "CLICK ON ME",
    "Oh for God's sake",
    "Massive L",
    "Are you just bored?",
    "Just click...",
    "You do this everyday",
    "How hard can it be?",
    "I'm right HERE",
    "Click to GET ANDROID APK FILE!!!",
    "Skill issue...",
    "Game Over bro",
    "Catch me if you can",
    "It's just a button...",
    "CLICK ME GODDAMIT",
    "CLICKKKK",
    "I can't help you",
    "OVER HERE",
    "Click me, it's FREE!",
    "WHAT are you doing?",
    "OMG ",
    "You're missing out!",
    "I'm still here...",
    "Try again, loser",
    "You can't catch me",
    "Is it too hard?",
    "I'm faster than you",
    "You're not even trying",
    "I'm getting bored",
    "You're no fun",
    "I'm over here now",
    "You're too slow",
    "Try harder next time",
    "You'll never catch me",
    "I'm untouchable",
    "Better luck next time",
    "You can't touch this",
    "I'm out of your reach",
    "You're wasting your time",
    "I'm just too quick for you",
    "You'll never get me",
    "You're not fast enough",
    "I'm still waiting...",
    "You missed me again",
    "I'm right here, dude",
    "You're too slow, bro",
    "Try again, maybe?",
    "I'm still running...",
    "Can't touch this!",
    "You're not quick enough",
    "I'm just too fast ",
    "You'll never get this",
    "I'm always one step ahead",
    "You're not even close",
    "You're not gonna get me",
    "You're not catching up",
    "You're not gonna win this",
    "You're chasing shadows",
    "I'm a figment of your imagination",
    "You're fishing in the air",
    "Android never again"


  ];
  var randomText = texts[Math.floor(Math.random() * texts.length)];
  button.innerHTML = randomText;
}

document.addEventListener("mousemove", function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var buttonRect = button.getBoundingClientRect();
  var buttonX = buttonRect.left + button.offsetWidth / 2;
  var buttonY = buttonRect.top + button.offsetHeight / 2;
  var distance = calculateDistance(mouseX, mouseY, buttonX, buttonY);

  if (distance < proximity) {
    moveButton();
  }
});
