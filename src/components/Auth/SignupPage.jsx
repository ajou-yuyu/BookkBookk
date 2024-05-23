import React, { useState } from "react";
import '../../styles/signup.css';
import MyPage from "../MyPage/MyPage";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // 회원가입 처리 로직
  };

  return (
    <div className="container">
      <div className="background-box"></div>

      <div className="logo">Bookk<br />Bookk</div>

      <div className="input-container" style={{ left: 300, top: 274 }}>
        <div className="input-box"></div>
        <input
          type="text"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        {/* <MyPage name={name} /> */}
        <div className="label" style={{ left: 51.66, top: 14 }}>이름</div>
      </div>

      <div className="input-container" style={{ left: 300, top: 378 }}>
        <div className="input-box"></div>
        <input
          type="text"
          className="input-field"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
        />
        <div className="label" style={{ left: 51.66, top: 14 }}>아이디</div>
      </div>
      {/* <MyPage name={name} /> => 그냥 여기있는 name을 MyPage로 전달하고 싶었던 건데 왜 signuppage에 흉측하게 뜨는 거냐며!~~~ 어떻게 하면 화면에 안뜨고 props로 전달만 하게 할까나? */}
      <div className="input-container" style={{ left: 300, top: 493 }}>
        <div className="input-box"></div>
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <div className="label" style={{ left: 51.66, top: 14 }}>비밀 번호</div>
      </div>

      <div className="input-container" style={{ left: 300, top: 609 }}>
        <div className="input-box"></div>
        <input
          type="password"
          className="input-field"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
        />
        <div className="label" style={{ left: 52, top: 14 }}>비밀 번호 확인</div>
      </div>

      <div className="signup-button" style={{ left: 447, top: 724 }} onClick={handleSignup}>
        <div className="signup-button-text">가입하기</div>
      </div>
    </div>
  );
};

export default SignupPage;


