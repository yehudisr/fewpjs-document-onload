document.addEventListener("DOMContentLoaded", function() {
  text = document.querySelector('p#text')
  text.textContent = "This is really cool!"
}); 

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  ); 