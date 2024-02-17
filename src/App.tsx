import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AppsPage from "./pages/AppsPage";
import RequireAuth from "./components/RequireAuth";
import AddAppPage from "./pages/AddAppPage";
import EditAppPage from "./pages/EditAppPage";
import { AppContainer } from "./global/styles/Global.styled";
import Registration from "./pages/Registration";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<RequireAuth><AppsPage/></RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Registration/>}/>
        <Route path="/add" element={<RequireAuth><AddAppPage/></RequireAuth>}/>
        <Route path="/edit/:appId" element={<RequireAuth><EditAppPage/></RequireAuth>}/>
      </Routes>
    </AppContainer>

  );
}

export default App;
