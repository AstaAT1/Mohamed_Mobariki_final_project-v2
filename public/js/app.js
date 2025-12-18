const terminal = document.getElementById("terminal");

const sequences = [
  ">> booting_neural_core.exe",
  ">> loading cyber_boy.full stuck developer",
  ">> syncing neural implants",
  ">> decrypting darknet channels",
  ">> injecting 1337 payload",
  ">> identity: Asta_AT1",
  ">> role: CYBER_BOY // LEET",
  ">> status: ONLINE",
];

let seqIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = sequences[seqIndex];
  if (!deleting) {
    terminal.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) setTimeout(() => deleting = true, 1200);
  } else {
    terminal.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      seqIndex = (seqIndex + 1) % sequences.length;
      charIndex = 0;
    }
  }
}
setInterval(typeEffect, 60);

setInterval(() => {
  terminal.style.textShadow = `
    ${Math.random()*8}px 0 #ff4fd8,
    ${Math.random()*-8}px 0 #3cf2ff,
    0 0 25px rgba(155,92,255,0.7)
  `;
}, 110);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 150) current = section.id;
  });
  navLinks.forEach(li => {
    li.classList.remove('active');
    if (li.querySelector('a').getAttribute('href').includes(current)) li.classList.add('active');
  });
});

const ascii = `
   ╔═╗┬ ┬┌─┐┌─┐┬─┐
   ║  └┬┘├┤ ├┤ ├┬┘
   ╚═╝ ┴ └─┘└─┘┴└─
      CYBER BOY
`;
console.log('%c' + ascii, 'color:#ff4fd8');

console.log('%c[1337 MODE ENABLED] CYBER BOY ONLINE', 'color:#3cf2ff; font-size:14px;');
