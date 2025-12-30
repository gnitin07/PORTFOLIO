/* ---------- TYPEWRITER ---------- */
const texts = [
  "Software  Engineer",
  "MERN Developer",
  "Data Analyst",
];

let index = 0, char = 0, deleting = false;
const typeEl = document.getElementById("typeText");

function typeEffect() {
  if (!deleting && char <= texts[index].length) {
    typeEl.textContent = texts[index].substring(0, char++);
  } else if (deleting && char >= 0) {
    typeEl.textContent = texts[index].substring(0, char--);
  }

  if (char === texts[index].length + 1) {
    deleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (deleting && char === 0) {
    deleting = false;
    index = (index + 1) % texts.length;
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}
typeEffect();

/* ---------- COLORFUL SKILLS ---------- */
const skillBox = document.getElementById("skillBox");
const skills = skillBox.textContent.trim().split(" ");
skillBox.innerHTML = "";

skills.forEach(skill => {
  const span = document.createElement("span");
  span.className = "skill";
  span.textContent = skill;
  span.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;
  skillBox.appendChild(span);
});

/* ---------- PARTICLES ---------- */
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

let width, height;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* Particle settings */
const PARTICLE_COUNT = 120;

const particles = [];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.5 + 0.2,
    opacity: Math.random() * 0.5 + 0.3
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach(p => {
    p.y += p.speed;

    if (p.y > height) {
      p.y = -10;
      p.x = Math.random() * width;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(180, 200, 255, ${p.opacity})`;
    ctx.fill();
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();
