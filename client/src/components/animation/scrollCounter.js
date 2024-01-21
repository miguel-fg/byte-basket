import React, { useEffect, useRef, useState } from "react";

const ScrollCounter = ({ counterId, targetNumber, speed }) => {
  const counterRef = useRef(null);
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Increase the number until it reaches the targetNumber
          const interval = setInterval(() => {
            setCurrentNumber((prevNumber) => {
              const nextNumber = prevNumber + 1;
              if (nextNumber >= targetNumber) {
                clearInterval(interval);
                return targetNumber;
              }
              return nextNumber;
            });
          }, speed);

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [counterId, targetNumber, speed]);

  return (
    <div ref={counterRef}>
      <p>{currentNumber}</p>
    </div>
  );
};

export default ScrollCounter;
