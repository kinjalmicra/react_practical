import React, { useState } from "react";
import { sculptureList } from "./data";

function Gallery() {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex(index + 1);
  };

  let sculpture = sculptureList[index];

  return (
    <section>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </section>
  );
}

export default Gallery;
