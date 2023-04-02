import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loader from "../Components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const loginHandler = (e) => {
    setLoader(true);
    axios
      .post(`/api/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        const token = response.data.token;
        const username = response.data.user.name;

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);

        setLoader(false);
        toast.success("Successfully Login");
        navigate("/register");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Wrong Credintials");
        setLoader(false);
      });
  };
  return (
    <Container>
      <FormContainer>
        <h1>Login</h1>

        <BsPersonCircle
          style={{
            fontSize: "8rem",
          }}
        />
        <div className="email">
          <MdEmail
            style={{
              fontSize: "2rem",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="email">
          <HiLockClosed
            style={{
              fontSize: "2rem",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button onClick={loginHandler}>LOGIN</Button>
        {loader && <Loader />}

        <p>
          {" "}
          New User ? <Link to="/register">Register</Link>
        </p>
      </FormContainer>
    </Container>
  );
};

export default Login;

const Button = styled.button`
  margin: 1rem;
  width: 60%;
  height: 40px;
  color: white;
  border-radius: 5px;

  background-color: #124c50;
  &:hover {
    cursor: pointer;
    background-color: #10aab3;
  }
`;
const FormContainer = styled.div`
  background-color: white;
  width: 90%;
  max-width: 30rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);

  .email {
    padding-top: 1rem;
    display: flex;
    width: 90%;
    justify-content: space-around;

    input {
      width: 80%;
      border-radius: 5px;
      padding-left: 1rem;
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
    155deg,
    rgba(66, 62, 148, 1) 0%,
    rgba(9, 121, 99, 0.915954415954416) 50%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
