import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsPersonCircle, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";

function Register() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

 

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerHandler = (e) => {
    setLoader(true)
    axios
    .post(`/api/register`, {
      name: username,
      email: email,
      password: password,
    })
    .then(function (response) {
      // console.log(response);
      setLoader(false);

      toast.success("Successfully Registered");
      navigate("/");
    })
    .catch(function (error) {
      setLoader(false);
      // console.log(error);
      toast.error("User Already Exist!!!");
    });
   
    setEmail("");
    setPassword("");
    setUsername("");
  };
  return (
    <Container>
      <FormContainer>
        <h1>Register</h1>
        <BsPersonCircle
          style={{
            fontSize: "8rem",
          }}
        />
        <div className="email">
          <BsFillPersonFill
            style={{
              fontSize: "2rem",
            }}
          />
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
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
        <Button onClick={registerHandler}>Register</Button>
        {
          loader && <Loader/>
        }
      </FormContainer>
    </Container>
  );
}

export default Register;
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
  width: 100%;
  background: linear-gradient(155deg, rgba(66,62,148,1) 0%, rgba(9,121,99,0.915954415954416) 50%, rgba(0,212,255,1) 100%);
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
