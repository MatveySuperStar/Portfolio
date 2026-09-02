'use client';

import { useEffect } from 'react';
import styles from './customCursor.module.scss';

type CircleElement = HTMLDivElement & { x: number; y: number };

const CustomCursor = (): React.ReactElement[] => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll<CircleElement>('.circle');

    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    window.addEventListener('mousemove', (event) => {
      coords.x = event.clientX;
      coords.y = event.clientY;
    });

    function animateCircles(): void {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';

        circle.style.scale = String((circles.length - index) / circles.length);

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return new Array(20)
    .fill(0)
    .map((_item, index) => (
      <div key={index} className={`${styles.circle} circle`} />
    ));
};

export default CustomCursor;
