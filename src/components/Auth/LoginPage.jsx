import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import readsomebookk from "../../assets/readsomebookk.png";

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange,
  };
};

const LoginPage = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const navigate = useNavigate();

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="element">
      <div className="div">
        <div className="overlap-left">
          <img className="img" alt="Element" src={readsomebookk} />
        </div>
        <div className="overlap-right">
          <div className="login-text">LOGIN</div>
          <div className="input-box">
            <label htmlFor="userid">아이디</label>
            <input
              type="text"
              name="input_id"
              value={inputId}
              onChange={handleInputId}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              name="input_pw"
              value={inputPw}
              onChange={handleInputPw}
            />
          </div>
          <button className="submit" type="submit" onClick={onClickLogin}>
            로그인
          </button>
          <div className="sign" onClick={handleSignupClick}>
            회원가입 하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
