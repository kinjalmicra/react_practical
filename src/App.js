import React, { Fragment, useState } from "react";
import Gallery from "./Components/Gallery";
import Home from "./Pages/Home";

function App() {
  // const handleClick = () => {
  //   alert("hellooooo sirii");
  // };

  // const [data, setData] = useState('Heyyy');
  const [data, setData] = useState(0);

  const handleData = () => {
   setData(data + 1)
  };
  return (
    <Fragment>
      {/* <Home /> */}
      {/* Click event and function */}
      <div>
        {/* <h1>Hello siri</h1> */}
        {/* <button onClick={handleClick()}>Click me</button> */}
        {/* <button onClick={handleClick}>Click me</button> */}
      </div>

      {/* state in functional Components */}
      {/* <div>
        <h1>{data}</h1>
        <button onClick={handleData}>Click me</button>
      </div> */}
      <div>
        <h1>{data}</h1>
        <button onClick={handleData}>Click me</button>
      </div>
    </Fragment>
  );
}

export default App;
