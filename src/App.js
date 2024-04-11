import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StrictMode } from "react";

import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import AuthHandler from "./components/Auth/AuthHandler";

const App = () => {
    return (
        <Router>
            <StrictMode>
                <Routes>
                    <Route path="" element={<AuthHandler />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </StrictMode>
        </Router>
    );
};

export default App;
