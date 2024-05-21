import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Auth/LoginPage";
import SignupPage from "./components/Auth/SignupPage";
import SignupCompletePage from "./components/Auth/SignupCompletePage";
import MainPage from "./components/Main/MainPage";
import BookSearchPage from "./components/Main/BookSearchPage";
import BookDetailPage from "./components/Main/BookDetailPage";
import ReviewPage from "./components/Main/ReviewPage";
import MyPage from "./components/MyPage/MyPage";
import BucketListPage from "./components/MyPage/BucketListPage";
// import ReviewsPage from './components/MyPage/ReviewsPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup-complete" element={<SignupCompletePage />} />
        <Route path="/search" element={<BookSearchPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/review/:id" element={<ReviewPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/bucketlist" element={<BucketListPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
