import React from "react";

export default function Card(props) {
  const { imgSrc, heading, text1 } = props;
  return (
    <div className="card-parent-div ">
      <section className="mt-4">
        <h4 className="font-color">Services</h4>
        <div className="img-div">
          <img src={imgSrc} alt="" />
        </div>
      </section>
      <section>
        <div className="cardHeading">
          <h5 className="font-color">{heading}</h5>
          <p className="font-color">{text1}</p>
        </div>
        <div className="line-parent">
          <div className="line-div"></div>
        </div>
      </section>
      <section className="cardPara">
        <p>Sodales fermentum</p>
        <p>Qquam Integer</p>
        <p>Nibh Arcu</p>
      </section>
    </div>
  );
}
