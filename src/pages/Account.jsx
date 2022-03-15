import React from "react";
import NavBar from "../components/navbar/NavBar";
import Login from "../components/loginAndCreatAccount/Login";
import CreatAccount from "../components/loginAndCreatAccount/CreatAccount";
import "./Account.css";

const Account = () => {
  return (
    <div className="Account">
      <NavBar />
      <div className="loginAndAccount">
          <Login />
          <CreatAccount />
        
      </div>
    </div>
  );
};

export default Account;
