/* eslint-disable no-unused-vars,array-callback-return,no-mixed-operators,no-param-reassign */
const color = '#eee';

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

function create(canvas) {
  let circles;
  let rectangulars;

  const rectangular1 = new Rectangular(0.05 * canvas.width, 0.3 * canvas.height, 40);
  const rectangular2 = new Rectangular(0.35 * canvas.width, 0.6 * canvas.height, 60);
  const rectangular3 = new Rectangular(0.65 * canvas.width, 0.25 * canvas.height, 80);
  const rectangular4 = new Rectangular(0.95 * canvas.width, 0.85 * canvas.height, 40);
// eslint-disable-next-line prefer-const
  rectangulars = [rectangular1, rectangular2, rectangular3, rectangular4];

  const circle1 = new Circle(0.05 * canvas.width, 0.1 * canvas.height, 100, 1);
  const circle2 = new Circle(0.1 * canvas.width, 0.75 * canvas.height, 20, 2);
  const circle3 = new Circle(0.85 * canvas.width, 0.9 * canvas.height, 150, 1);
  const circle4 = new Circle(0.9 * canvas.width, 0.1 * canvas.height, 0, 1);
// eslint-disable-next-line prefer-const
  circles = [circle1, circle2, circle3, circle4];

  return { circles, rectangulars };
}

function drawBackground(canvas, ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.4);
  gradient.addColorStop(0, '#EABF7B');
  gradient.addColorStop(0.6, '#F7E7CE');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(circles, ctx) {
  circles.map((ele) => {
    if ((ele.radius + ele.exv) > 150 || (ele.radius + ele.exv) < 0) {
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

function drawRectangular(rectangulars, ctx) {
  rectangulars.map((ele) => {
    ele.degree += ele.dv;

    ctx.fillStyle = color;
    ctx.save();
    ctx.translate((ele.x + 0.5 * ele.len), (ele.y + 0.5 * ele.len));
    ctx.rotate(ele.degree);
    ctx.fillRect(-0.5 * ele.len, -0.5 * ele.len, ele.len, ele.len);
    ctx.restore();
  });
}

export { create, drawBackground, drawCircle, drawRectangular };
