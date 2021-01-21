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
            <div classsName="header__left">
                <h1 className="mechlevelsheader">MechLevels</h1>

            </div>
            
            <div className="header__right">
                <a className="headerleft__meettheteamA">Meet the MechLevels Team</a>
                <a className="headerright__addA">Add Compensation</a>
                <button className="logoutbutton" onClick={signOut}>Logout</button>

            </div>
        </div>
    );

}

export default Header;