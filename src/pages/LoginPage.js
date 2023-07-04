import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <Wrapper>
      <BackgroundImage />
      <div className="loginContent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="container">
              <h1 className="title">Login</h1>
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;

    .form-wrapper {
      display: flex;
      flex-direction: center;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      height: 85vh;
    }
    .form {
      display: flex;
      flex-direction: center;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      background-color: rgba(0, 0, 0, 0.85);
      height: 60vh;
      padding: 2rem;
      color: white;
      border-radius: 0.4rem;
      .title {
      }
    }
    .container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      input {
        border-radius: 0.4rem;
        padding: 0.5rem 1rem;
        width: 25rem;
        height: 2.4rem;
        outline: none;
      }
      .title {
        text-align: center;
      }
      button {
        padding: 0.5rem;
        background-color: red;
        border: none;
        cursor: pointer;
        border-radius: 0.4rem;
        height: 3.4rem;
        color: white;
        font-weight: bold;
        font-size: 1.05rem;
      }
    }
  }
`;

export default LoginPage;
