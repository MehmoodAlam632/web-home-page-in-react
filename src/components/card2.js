import React from "react";

export default function Card2(props) {
  const { heading, imgSrc ,heading1} = props;
  return (
    <div className="card2Parent">
    <div className="heading5 mt-4">
      <h5 >{heading} <span>{heading1}</span></h5>
    </div>
      <div className="img-div my-3">
        <img src={imgSrc} alt="" />
      </div>
      <div className="para-div mt-3 mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolor  Ander nostrum cumque modi, perferendis sed in nesciunt voluptatum,
          suscipit optio odit omnis id praesentium laudantium, sint ipsum rerum
          assumenda loremab!
        </p>
      </div>
    </div>
  );
}
