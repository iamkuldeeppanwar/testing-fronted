import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Registor = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { userName, email, password };
    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/register",
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
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>userName</label>
        <input
          type="text"
          placeholder="Enter name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

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

        <Link to={"/"}>Login</Link>
      </form>
    </div>
  );
};

export default Registor;
