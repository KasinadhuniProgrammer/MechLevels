import React from 'react';
import './Header.css';


import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer"; 


function Header() {
    const [state, disptach] = useStateValue();

    const signOut = (e) => {
        auth.signOut().then(function() {
            alert('You are now being signed out of MechLevels');
            window.location.href = '/';
        }).catch(function(error) {
            alert('error signing out');
        })
    }


    return (
        <div className="header">
            <center><h1 className="header__title">MECHLEVELS</h1></center>
            <center><h3 className="header__desc">Find compensations from top companies</h3></center>
            <center><button className="logout__button" onClick={signOut}>Logout</button></center>
        </div>
    );

}

export default Header;