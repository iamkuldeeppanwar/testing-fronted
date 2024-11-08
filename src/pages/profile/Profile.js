import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate("");
  const [user, setUser] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      getUserProfile();
    }
  }, [token]);

  const getUserProfile = async () => {
    try {
      const res = axios.get("http://localhost:4000/api/user/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res?.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome : {user?.name}</h1>
    </div>
  );
};

export default Profile;
