import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const userdetails = { email, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdetails),
    };

    try {
      const res = await fetch(
        "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin",
        options,
      );
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        Cookies.set("jwt_token", data.data.token);
        const token = Cookies.get("jwt_token");
        console.log(token);
        navigate("/", { replace: true });
      } else {
        setErrMsg(data.message || "Invalid Email or Password");
      }
    } catch {
      setErrMsg("Something went wrong");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h1 className="go-heading">Go Business</h1>
        <p>Sign in to open your referral dashboard</p>
        <form className="form" onSubmit={onSubmitForm}>
          <label>Email</label>
          <input
            type="text"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">Sign In</button>
          {errMsg && <p>{errMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
