import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import MainScreen from "./pages/MainScreen"

const MainRoutes = () => {
    
    
    return (
        <Routes>
            <Route path="/login" element={<UserLogin />}></Route>
            <Route exact path="/" element={localStorage.getItem('userName') ? <Navigate to="/mainscreen" /> :  <UserLogin/> }></Route>
            <Route path="/mainscreen" element={<MainScreen />}></Route>
        </Routes>
    )
}

export default MainRoutes;

