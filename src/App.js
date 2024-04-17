import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StrictMode } from "react";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthDetails from "./components/Auth";

const App = () => {
    return (
        <Router>
            <StrictMode>
                <Routes>
                    <Route path="" element={<AuthDetails />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </StrictMode>
        </Router>
    );
};

export default App;
