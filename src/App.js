import React from "react";
import LoginPage from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App