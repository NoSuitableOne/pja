const color = '#b5b9bd';

class Circle {
  constructor(x, y, radius, exv) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.radius = radius;
    this.exv = exv;
  }

  move(vx = 0, vy = 0) {
    this.vx = vx;
    this.vy = vy;
  }

  stop() {
    this.vx = 0;
    this.vy = 0;
  }
}

class Rectangular {
  constructor(x, y, len) {
    this.x = x;
    this.y = y;
    this.len = len;
    this.degree = 0;
    this.dv = 0.01 * Math.PI;
  }
}

const rectangular1 = new Rectangular(200, 600, 40);
const rectangular2 = new Rectangular(800, 100, 60);
const rectangular3 = new Rectangular(1500, 300, 20);
const rectangular4 = new Rectangular(1800, 780, 40);
const rectangulars = [rectangular1, rectangular2, rectangular3, rectangular4];

const circle1 = new Circle(20, 100, 100, 1);
const circle2 = new Circle(450, 500, 20, 2);
const circle3 = new Circle(750, 800, 200, 1);
const circle4 = new Circle(1600, 60, 0, 1);

const circles = [circle1, circle2, circle3, circle4];

function drawBackground(canvas, ctx) {
  const gradient = ctx.createRadialGradient(0.5 * canvas.width, canvas.height, 0,
    0.5 * canvas.width, canvas.height, 0.8 * canvas.height);
  gradient.addColorStop(0, '#EABF7B');
  gradient.addColorStop(1, '#F7E7CE');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(canvas, ctx) {
  circles.map((ele) => {
    if ((ele.radius + ele.exv) > 200 || (ele.radius + ele.exv) < 0) {
      ele.exv = -ele.exv;
    }
    ele.radius += ele.exv;

    ctx.beginPath();
    ctx.arc(ele.x, ele.y, ele.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
  });
}

function drawBezierCurve(canvas, ctx) {
  ctx.lineWidth = 6;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 0.1 * canvas.height);
  ctx.bezierCurveTo(0.3 * canvas.width, 0.7 * canvas.height,
    0.6 * canvas.width, 0.15 * canvas.height,
    canvas.width, 0.8 * canvas.height);
  ctx.stroke();
}

function drawRectangular(canvas, ctx) {
  rectangulars.map((ele) => {
    ele.degree += ele.dv;

    ctx.fillStyle = color;
    ctx.save();
    ctx.translate((ele.x + 0.5 * ele.len), (ele.y + 0.5 * ele.len));
    ctx.rotate(ele.degree);
    ctx.fillRect(-0.5 * ele.len, -0.5 * ele.len, ele .len, ele.len);
    ctx.restore();
  });
}

export { drawBackground, drawCircle, drawRectangular };
