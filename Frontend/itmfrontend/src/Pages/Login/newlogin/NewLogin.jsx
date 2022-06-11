import React, { useState, useEffect , useRef,  useContext} from "react";
import styled from "styled-components";
//import Button from "./components/Button";
//import Input from "./components/Input";
import "./index.css";
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {investigationContext} from "../../context/GlobelInvestigationContext" 
function NewLogin() {

  const [Username, setUsername] = useState("");
  const [UserPassword, setPassword] = useState("");
   
  const { isFetching, token, Investeam, error, dispatch } = useContext(investigationContext)
  const navigate = useNavigate()
  const handleUsernameInput = event => {
       setUsername(event.target.value);
        console.log(Username)
  };
   const handlePasswordInput = event => {
        setPassword(event.target.value);
        console.log(UserPassword)
  };
  const handleLogin = async (e) => {
        
        e.preventDefault()
        const UserName = Username 
        const Password = UserPassword 
        const body = JSON.stringify( { UserName, Password })
        console.log(body);
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        try {
            dispatch({ type: "LOGIN_START" })
            const res = await axios.post("http://localhost:5000/api/investigationteams/logininvestigationteam", body, config)
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.investigationTeam , token: res.data.token})
            
            console.log("from backend" ,res.data.investigationTeam , res.data.token)
            navigate("/dashboard");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload:err})
            alert("Invalid credentials");
            
        }
    }
 
  return (
   <div className="body1">
    <MainContainer1>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer1>
         
        <input
          className="input"
          type="text" placeholder="UserName"
          onChange={handleUsernameInput}
        />
        <input
          className="input"
          type="password" placeholder="Password"
          onChange={handlePasswordInput}
        />
  
      </InputContainer1>
      <ButtonContainer1>
          <button className="button" type="button" onClick={handleLogin}>Login</button>
      </ButtonContainer1>
      <HorizontalRule />
      <ForgotPassword>For Credentials Contect PoliceStation Admin</ForgotPassword>
    </MainContainer1>
  </div>   
  );
}

const MainContainer1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
 
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;
const Body1= styled.div`
 
  background-image: url("./background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: "Raleway", sans-serif;
`;
const InputContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer1 = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

 

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;
 

const ForgotPassword = styled.h4`
  cursor: pointer;
  margin: 4rem 0 2rem 5rem;
  color:  white;
  font-size: 14px;
  font-family: "Times New Roman", Times, serif;
   
`;

export default NewLogin;
