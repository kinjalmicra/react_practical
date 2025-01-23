import React from "react";

function Avatar(props) {
    const {image , name, width =50 , height = 50} = props
  return (
    <div>
      <img
        src={image}
        alt="Avatar"
        style={{ width: width, height: height, borderRadius: "50%" }}
      />
      <p>{name}</p>
    </div>
  );
}

export default Avatar;
