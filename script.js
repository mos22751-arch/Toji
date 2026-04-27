const cursor = document.getElementById("cursor");
const modeIcon = document.getElementById("modeIcon");

/* CURSOR + FUN TRAIL */
document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

createBubble(e.clientX, e.clientY);
});

/* FUN BUBBLES */
function createBubble(x,y){

const bubble = document.createElement("div");
bubble.className = "bubble";
document.body.appendChild(bubble);

bubble.style.left = x + "px";
bubble.style.top = y + "px";

const colors = ["#4aa3ff","#7c5cff","#5cffc8","#ffffff"];
bubble.style.background = colors[Math.floor(Math.random()*colors.length)];

setTimeout(()=>bubble.remove(),600);
}

/* THEME */
function toggleTheme(){
document.body.classList.toggle("light");
document.body.classList.toggle("dark");

modeIcon.textContent =
document.body.classList.contains("light") ? "🌞" : "🌙";
}

function scrollTo(id){
document.getElementById(id)?.scrollIntoView({
behavior:"smooth",
block:"start"
});
}
/* BACKGROUND */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let dots = Array.from({length:60},()=>({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*1,
vy:(Math.random()-0.5)*1
}));

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let d of dots){

d.x+=d.vx;
d.y+=d.vy;

if(d.x<0||d.x>canvas.width)d.vx*=-1;
if(d.y<0||d.y>canvas.height)d.vy*=-1;

ctx.beginPath();
ctx.arc(d.x,d.y,2,0,Math.PI*2);
ctx.fillStyle="rgba(74,163,255,0.5)";
ctx.fill();
}

requestAnimationFrame(animate);
}

animate();

/* RESIZE */
window.addEventListener("resize",()=>{
canvas.width = innerWidth;
canvas.height = innerHeight;
});