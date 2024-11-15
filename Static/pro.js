const typingTextElement = document.getElementById("typing-text");
const phrases = ["Growth","Talent","Hiring"];
let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;
let typingSpeed = 200; 
let transition = 'transform 0.3s ease'

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  typingTextElement.textContent = currentPhrase.slice(0, currentCharacterIndex);

  if (isDeleting) {
    currentCharacterIndex--;
  } else {
    currentCharacterIndex++;
  }
  if (currentCharacterIndex === currentPhrase.length) {
    isDeleting = true;
    transition = 'transform 0.3s ease'
    color = "red"
  }

  if (isDeleting && currentCharacterIndex === 0) {
    isDeleting = false;
    typingSpeed = 200;
    transition = 'transform 0.3s ease'
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  }
  setTimeout(type, typingSpeed);
}
type();

function bgChange() {
  
  document.getElementById("change").style.backgroundColor = "black";
  document.getElementById("change").style.color = "white";
  document.getElementById("logo").style.backgroundColor = "#36454F"
  document.querySelector(".post-cards").style.color = "black";
}
