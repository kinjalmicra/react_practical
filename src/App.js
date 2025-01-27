import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Gallery from "./Components/Gallery";
import Home from "./Pages/Home";
import Student from "./Components/Student";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import User from "./Components/User";
import DataMap from "./Components/DataMap";
import NestList from "./Components/NestList";

function App() {
  // const [name, setName] = React.useState("siri");

  // useEffect
  // const [count, setCount] = useState(0);
  // const [data, setData] = useState(100);

  // useEffect(() => {
  //   console.log("use effect call");
  // });

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
  // const [name, setName] = useState("");
  // const [tnc, setTnc] = useState(false);
  // const [interest, setInterest] = useState("");
  // function getFormData(e) {
  //   console.log(name, interest, tnc);
  //   e.preventDefault();
  //   handleClear();
  // }

  // const handleClear = () => {
  //   setName("");
  //   setTnc(false);
  //   setInterest("");
  // };

  // const getdata = () => {
  //   alert("helloo sirii");
  // };

  /* useMemo Hook */

  // const [count, setCount] = useState(0);
  // const [item, setItem] = useState(10);

  // const multiCountMemo = useMemo(
  //   function multiCount() {
  //     console.log("multiCount");
  //     return count * 5;
  //   },
  //   [count]
  // );

  // useRef Hook

  // let inputRef = useRef(null);
  // const handleInput = () => {
  //   // console.log("function call");
  //   // inputRef.current.value='1000'
  //   // inputRef.current.focus();
  //   // inputRef.current.style.display='none'
  // };

  // forwardRef example
  // let inputRef = useRef(null);

  // const updatenput = () => {
  //   inputRef.current.value = "1000";
  //   inputRef.current.style.color = 'red'
  // };

  return (
    <Fragment>
      {/* useMemo Hook */}
      {/* 
      <h1>useMemo Hook in React</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button> */}

      {/* useRef Hook */}
      {/* <h1>useRef Hook in React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle Input</button> */}

      {/* forwardRef example */}
      <h1>forwardRef example</h1>
      <User ref={inputRef} />
      <button onClick={updatenput}>handle Input</button>

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
      {/* <div>
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
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <option>Select Options</option>
            <option>Marvel</option>
            <option>DC</option>
          </select>{" "}
          <br />
          <br />
          <input
            type="checkbox"
            checked={tnc}
            onChange={(e) => setTnc(e.target.checked)}
          />
          <span>Accept Terms and conditions</span>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div> */}
      {/* Conditional rendering | If Condition */}
      {/* <Profile /> */}
      {/* Basic Form validation  */}
      {/* <Login /> */}
      {/* Pass Function as Props */}
      {/* <User data={getdata}/> */}
      {/* Render life cycle method */}
      {/* <User /> */}
      {/* componentDidMount life cycle method */}
      {/* <User /> */}
      {/* componentDidUpdate life cycle method */}
      {/* <User /> */}
      {/* <User count={count} data={data}/>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setData(data + 1)}>Data</button> */}
      {/* <DataMap /> */}
      {/* <NestList /> */}
    </Fragment>
  );
}

export default App;
