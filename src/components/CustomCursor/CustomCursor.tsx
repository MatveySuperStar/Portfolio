"use client";
import React, { useEffect } from "react";
import styles from "./customCursor.module.scss";

const CustomCursor = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    circles.forEach(function (circle: any, index) {
      circle.x = 0;
      circle.y = 0;
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle: any, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = (circles[index + 1] || circles[0]) as
          | { x: number; y: number }
          | any;
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
