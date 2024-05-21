import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";

// DOM에서 루트 요소를 가져옵니다.
const rootElement = document.getElementById("root");

// 루트 요소가 존재하는지 확인합니다.
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("루트 요소를 찾을 수 없습니다.");
}
