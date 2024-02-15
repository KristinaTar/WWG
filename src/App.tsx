import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AppsPage from "./pages/AppsPage";
import RequireAuth from "./components/RequireAuth";
import AddAppPage from "./pages/AddAppPage";
import EditAppPage from "./pages/EditAppPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth><AppsPage/></RequireAuth>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/add" element={<RequireAuth><AddAppPage/></RequireAuth>}/>
      {/*todo ID*/}
      <Route path="/edit/:appId" element={<RequireAuth><EditAppPage/></RequireAuth>}/>
    </Routes>
  );
}

export default App;
