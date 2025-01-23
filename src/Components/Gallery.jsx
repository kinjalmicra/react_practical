import React, { useState } from "react";
import { sculptureList } from "./data";
import Avatar from "./Avatar";

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

      <Avatar name="Sara" image="https://i.pravatar.cc/150?img=1"  />
      <Avatar name="ASara" image="https://i.pravatar.cc/150?img=1"  />
    </section>
  );
}

export default Gallery;
