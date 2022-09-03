import React from "react";

export default function (props) {
  const { text } = props;
  return (
    <div>
      <ul className="menu-div">
        <li>{text}</li>
      </ul>
    </div>
  );
}
