import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AppsPage from "./components/AppsPage";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth><AppsPage/></RequireAuth>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
