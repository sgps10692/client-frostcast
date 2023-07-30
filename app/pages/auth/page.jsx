'use client'
import React, { useState } from 'react';
import Login from "../auth/Login";
import Register from "../auth/Register";

export default function Page() {
    const [showLogin, setShowLogin] = useState(true); 

    const toggleForm = () => {
        setShowLogin(!showLogin);  
    };
    return (
        <div>
            {showLogin ?  <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
        </div>
    );
}