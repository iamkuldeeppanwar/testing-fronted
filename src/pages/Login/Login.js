import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/login",
        data
      );
      localStorage.setItem("token", res?.token);
      localStorage.setItem("user", res?.user);
      navigate("/protected");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "50px auto",
        border: "1px solid black",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <button style={{ marginTop: "10px" }} type="submit">
          Submit
        </button>
        <Link to={"/register"}>Register</Link>
      </form>
    </div>
  );
};

export default Login;
