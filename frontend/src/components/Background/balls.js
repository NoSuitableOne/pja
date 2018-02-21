const ball1 = {
  x: 100,
  y: 50,
  velocity: 1,
  radius: 200,
  color: 'red',
};

const ball2 = {
  x: 350,
  y: 400,
  velocity: 4,
  radius: 10,
  color: 'yellow',
};

const ball3 = {
  x: 1000,
  y: 600,
  velocity: 2,
  radius: 150,
  color: 'orange',
};

const balls = [ball1, ball2, ball3];

function drawBall(canvas, ctx, obj) {
  obj.map((ele) => {
    if ((ele.radius + ele.velocity) > 200 || (ele.radius + ele.velocity) < 0) {
      ele.velocity = -ele.velocity;
    }
    ele.radius += ele.velocity;

    ctx.beginPath();
    ctx.arc(ele.x, ele.y, ele.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.stroke();
  });
}

export { balls, drawBall };
