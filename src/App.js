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

  // const [data, setData] = useState(null);
  // const [print, setPrint] = useState(false);
  // const getData = (e) => {
  //   console.log(e.target.value);
  //   setData(e.target.value);
  //   setPrint(false);
  // };

  // const [status, setStatus] = useState(true);
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  function getFormData(e) {
    console.warn(name, interest, tnc);
    e.preventDefault();
  }
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
      {/* {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      
      <button onClick={() => setPrint(true)}>Print</button> */}

      {/* Hide , Show and Toggle */}
      {/* {staus ? <h1>Hello Siri</h1> : null}
      <button onClick={() =>setStaus(false)}>Hide</button>
      <button onClick={() =>setStaus(true)}>Show</button> */}
      {/* <div>
        {status ? <h1>Hello Siri</h1> : null}

        <button onClick={() => setStatus(!status)}>
          {status ? "Hide" : "Show"}
        </button>
      </div> */}

      {/* Handle Form | checkbox | input field | select */}
      <div className="App">
        <h1>Handle Form in React</h1>
        <form onSubmit={getFormData}>
          <input
            type="text"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <br />
          <select onChange={(e) => setInterest(e.target.value)}>
            <option>Select Options</option>
            <option>Marvel</option>
            <option>DC</option>
          </select>{" "}
          <br />
          <br />
          <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
          <span>Accept Terms and conditions</span>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Fragment>
  );
}

export default App;
