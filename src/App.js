import React, { Fragment, useState } from "react";
import Gallery from "./Components/Gallery";
import Home from "./Pages/Home";
import Student from "./Components/Student";

function App() {
  // const handleClick = () => {
  //   alert("hellooooo sirii");
  // };

  // const [data, setData] = useState('Heyyy');
  // const [data, setData] = useState(0);

  // const handleData = () => {
  //   setData(data + 1);
  // };

  // const [name, setName] = useState("siri");

  // const handaleName = () => {
  //   setName("Siya");
  // };

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const getData = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
    setPrint(false);
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
      {/* <div>
        <h1>{data}</h1>
        <button onClick={handleData}>Click me</button>
      </div> */}

      {/* props in functional Components */}
      {/* <h1>Props in react</h1>
      <Student name={name} />
      <button onClick={handaleName}>
        Update Name
      </button> */}

      {/* Get Input box value */}
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print</button>
    </Fragment>
  );
}

export default App;
