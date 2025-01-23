import React, { useState } from "react";
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const loginHandle = (e) => {
    e.preventDefault();

    if (user.length < 3 || password.length < 3) {
      alert("Please enter valid values.");
    } else {
      alert("Login successful!");
    }
  };

  const userHandler = (e) => {
    const value = e.target.value;
    setUser(value);
    setUserErr(value.length < 3);
  };

  const passwordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPassErr(value.length < 3);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter User Id"
            value={user}
            onChange={userHandler}
          />
          {userErr && <span className="error">User not valid</span>}
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter User Password"
            value={password}
            onChange={passwordHandler}
          />
          {passErr && <span className="error">Password not valid</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
