import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../../firebase";
import "./authPanel.css";
import exit from "../../icons/signOut.png";

const SignOut = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => console.log("success"))
            .catch((e) => console.log(e));
    };

    return (
        <div className="authPanel">
            {authUser ? (
                <div className="section">
                    <p>{`Signed in as ${authUser.email}`}</p>
                    <button className="logOut" onClick={userSignOut}><img src={exit} className="signOut" alt="" /></button>
                </div>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
};

export default SignOut;
