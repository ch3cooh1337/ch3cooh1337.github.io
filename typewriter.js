// typewriter.js
const phrases = [
  "CTF Player",
  "Whitehat Hacker",
  "Python & PHP Dev",
  "Trading Bot Builder",
  "Ex-Blackhat ⚠️"
];

let el = document.getElementById("typing");
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i >= phrases.length) i = 0;
  current = phrases[i];

  let visible = isDeleting
    ? current.substring(0, j--)
    : current.substring(0, j++);

  el.innerHTML = visible;

  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 40 : 100);
  }
}
type();
