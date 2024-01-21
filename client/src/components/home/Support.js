import React, { useRef } from "react";

const Support = () => {
  const cardsRef = useRef([]);

  const handleBlur = (index) => {
    cardsRef.current[index].hover = false;
  };

  const handleFocus = (index) => {
    cardsRef.current[index].hover = true;
  };

  const handleMouseMove = (index, e) => {
    if (!cardsRef.current[index].hover) return;

    const rect = cardsRef.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const mousePosition = { x, y };
    const cardSize = {
      width: cardsRef.current[index].offsetWidth || 0,
      height: cardsRef.current[index].offsetHeight || 0,
    };
    cardsRef.current[index].style.transform = `perspective(1000px) rotateX(${
      (mousePosition.y / cardSize.height) * -8 + 4
    }deg) rotateY(${
      (mousePosition.x / cardSize.width) * 8 - 4
    }deg) translateZ(10px)`;
  };

  const handleMouseOut = (index) => {
    cardsRef.current[index].hover = false;
    cardsRef.current[index].style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  const handleMouseOver = (index) => {
    cardsRef.current[index].hover = true;
  };

  return (
    <>
      <h2 className="support-title">Ways to give</h2>
      <div className="support">
        <div
          className="support-way card"
          ref={(el) => (cardsRef.current[0] = el)}
          onBlur={() => handleBlur(0)}
          onFocus={() => handleFocus(0)}
          onMouseMove={(e) => handleMouseMove(0, e)}
          onMouseOut={() => handleMouseOut(0)}
          onMouseOver={() => handleMouseOver(0)}
          tabIndex="0"
        >
          <img src="/assets/support1.png" alt="" />
          <h3>
            <b>Inventory</b>
          </h3>
          <p>
            Effortlessly monitor and contribute to our inventory online,
            ensuring transparency and convenience in accessing and donating
            items
          </p>
        </div>
        <div
          className="support-way card"
          ref={(el) => (cardsRef.current[1] = el)}
          onBlur={() => handleBlur(1)}
          onFocus={() => handleFocus(1)}
          onMouseMove={(e) => handleMouseMove(1, e)}
          onMouseOut={() => handleMouseOut(1)}
          onMouseOver={() => handleMouseOver(1)}
          tabIndex="0"
        >
          <img src="/assets/support2.png" alt="" />
          <h3>
            <b>Give</b>
          </h3>
          <p>
            Contribute to our mission of alleviating hunger by supporting us
            through monetary donations and food contributions
          </p>
        </div>
        <div
          className="support-way card"
          ref={(el) => (cardsRef.current[2] = el)}
          onBlur={() => handleBlur(2)}
          onFocus={() => handleFocus(2)}
          onMouseMove={(e) => handleMouseMove(2, e)}
          onMouseOut={() => handleMouseOut(2)}
          onMouseOver={() => handleMouseOver(2)}
          tabIndex="0"
        >
          <img src="/assets/support3.png" alt="" />
          <h3>
            <b>Volunteer</b>
          </h3>
          <p>
            Join us in the fight against hunger by volunteering at our food bank
            and making a meaningful difference in the lives of those in need
          </p>
        </div>
      </div>
    </>
  );
};

export default Support;
