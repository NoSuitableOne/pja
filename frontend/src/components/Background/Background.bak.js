import React from 'react';
import { create, drawBackground, drawCircle, drawRectangular } from './source';

class NewsBg extends React.Component {
  componentDidMount() {
    const canvas = document.querySelector('#news-bg');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = 0.85 * window.innerHeight;

    const { circles, rectangulars } = create(canvas);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground(canvas, ctx);
      // drawCircle(circles, ctx);
      drawRectangular(rectangulars, ctx);
      window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = 0.85 * window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas, false);
  }

  render() {
    return <canvas id="news-bg" />;
  }
}

export default NewsBg;
