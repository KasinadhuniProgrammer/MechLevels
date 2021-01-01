import React from 'react';
import './Header.css';


import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer"; 


function Header() {
    const [state, disptach] = useStateValue();

    const signOut = (e) => {
        auth.signOut().then(function() {
            alert('signed out successfully');
            window.location.href = '/';
        }).catch(function(error) {
            alert('error signing out');
        })
    }


    return (
        <div className="header">
            <center><h1 className="mechlevels__title">MechLevels</h1></center>
            <center><h3 className="mechlevels__desc">Find Mechanical Engineers compensations from top companies!</h3></center>
            <button className="logoutbutton" onClick={signOut}>Logout</button>
            <center><input className="searchinput" placeholder="search"/></center>
        </div>
    );

}

export default Header;