import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { Link } from 'react-router-dom';
import Loading from "../Loading";
import LeftPanel from "../LeftPanel";
import Map from "../Map/Map";
import SetImage from "../SetImage";

const AuthDetails = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    if (loading) {
        return <Loading/>;
    }

    const urls = {
        signIn: "/signin",
        signUp: "/signup"
    };

    return (
        <>
            {user ? (
                <>
                    <LeftPanel />
                    <Map />
                </>
            ) : (
                <section>
                    <SetImage/>
                    <div className="login">
                        <h2>Welcome to My React Leaflet App</h2>
                        <p style={{ textAlign: "center" }}>Please sign in or sign up</p>
                        <div className="inputBox">
                            <Link to={urls.signIn}>
                                <button id={"btn"}>Sign In</button>
                            </Link>
                            <Link to={urls.signUp}>
                                <button id={"btn"}>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default AuthDetails;
