import React, { useRef } from "react";

const VolunteerPage = () => {
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
    <div className="volunteer">
      <h2 className="support-title">Contribute</h2>
      <p className="volunteer-desc">
        Explore the rewarding world of volunteering
        <br />
        with us and be a part of the solution!
      </p>
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
          <img src="/assets/volunteer1.png" alt="" />
          <h3>
            <b>
              Meaningful <br /> Impact
            </b>
          </h3>
          <p>
            Contribute to the fight against hunger and help us provide essential
            nourishment to individuals and families facing food insecurity in
            our community.
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
          <img src="/assets/volunteer2.png" alt="" />
          <h3>
            <b>Stronger Community</b>
          </h3>
          <p>
            Be a catalyst for positive change by fostering a sense of community
            and solidarity. Join like-minded individuals who share the common
            goal of creating a hunger-free future.
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
          <img src="/assets/volunteer3.png" alt="" />
          <h3>
            <b>Flexible Opportunities</b>
          </h3>
          <p>
            We understand that your time is valuable. That's why we offer
            flexible volunteering options that fit your schedule, whether it's a
            few hours a week or a one-time event.
          </p>
        </div>
      </div>
      <button
        className="volunteer-button"
        onClick={() => {
          alert("Contact us thru a form on Home page");
        }}
      >
        Join Us
      </button>
    </div>
  );
};

export default VolunteerPage;
