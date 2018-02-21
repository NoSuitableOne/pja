import React from 'react';
import { balls, drawBall } from './balls';

class NewsBg extends React.Component {
  componentDidMount() {
    const canvas = document.querySelector('#news-bg');
    const ctx = canvas.getContext('2d');
    console.log(canvas.parentElement);

    canvas.width = window.innerWidth;
    canvas.height = 0.85 * window.innerHeight;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall(canvas, ctx, balls);
      window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
  }

  render() {
    return <canvas id="news-bg" />;
  }
}

export default NewsBg;
