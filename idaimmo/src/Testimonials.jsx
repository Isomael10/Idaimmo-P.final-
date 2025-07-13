import React, { useRef, useEffect } from "react";

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [slide, setSlide] = React.useState(0);

  useEffect(() => {
    const total = 3;
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${slide * 33.333}%)`;
    }