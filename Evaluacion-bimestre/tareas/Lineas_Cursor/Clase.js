const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const point1 = { x: 100, y: 100 };
const point2 = { x: 200, y: 100 };
const point3 = { x: 300, y: 100 };
const point4 = { x: 400, y: 100 };
const point5 = { x: 500, y: 500 };
const point6 = { x: 600, y: 500 };
const point7 = { x: 700, y: 500 };
const point8 = { x: 800, y: 500 };



function drawLines(mouseX, mouseY) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(point1.x, point1.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.strokeStyle = 'purple';
  ctx.lineWidth = 8;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(point2.x, point2.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.strokeStyle = 'pink';
  ctx.lineWidth = 8;
  ctx.stroke();
  
    ctx.beginPath();
  ctx.moveTo(point3.x, point3.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.strokeStyle = 'purple';
  ctx.lineWidth = 8;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(point4.x, point4.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.strokeStyle = 'pink';
  ctx.lineWidth = 8;
  ctx.stroke();
  
    ctx.beginPath();
  ctx.moveTo(point5.x, point5.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.strokeStyle = 'purple';
  ctx.lineWidth = 8;
  ctx.stroke();
  
    ctx.beginPath();
  ctx.moveTo(point6.x, point6.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.strokeStyle = 'pink';
  ctx.lineWidth = 8;
  ctx.stroke();
  
    ctx.beginPath();
  ctx.moveTo(point7.x, point7.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.strokeStyle = 'purple';
  ctx.lineWidth = 8;
  ctx.stroke();
  
    ctx.beginPath();
  ctx.moveTo(point8.x, point8.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.strokeStyle = 'pink';
  ctx.lineWidth = 8;
  ctx.stroke();
  
}


canvas.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  drawLines(mouseX, mouseY);
});


