import React, { useState } from "react";
import '../../styles/mypage.css'

const MyPage = (props) => {

  const name = props.name;
  //const { name } = props;

  return (
    <div className="container">
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="#">로그아웃</a></li>
            <li><a href="/mypage">MY PAGE</a></li>
            <li><a href="/home">Bookk<br />Bookk</a></li>
          </ul>
        </nav>
      </div>
      <div classname="welcome-message">{name}님 하이루!</div>
      <div className="button-container">
        <a href="/bucketlist"><button>버킷리스트</button></a>
        <a href="/reviewlist"><button>독후감</button></a>
      </div>
    </div>
  );
};

export default MyPage;
