import React from 'react';
import { drawBackground, drawCircle, drawRectangular } from './source';

class NewsBg extends React.Component {
  componentDidMount() {
    const canvas = document.querySelector('#news-bg');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = 0.85 * window.innerHeight;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground(canvas, ctx);
      drawCircle(canvas, ctx);
      drawRectangular(canvas, ctx);
      window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
  }

  render() {
    return <canvas id="news-bg" />;
  }
}

export default NewsBg;
