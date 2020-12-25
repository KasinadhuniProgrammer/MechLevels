import React from 'react';
import './Header.css';

import { Button } from "@material-ui/core";
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
            <div className="dashboardheader__left">
                <input placeholder="Search Company"/>

            </div>
            <div className="dashboardheader__center">
                <h1><center>MechLevels</center></h1>
            </div>
            <div className="dashboardheader__right">
                <Button onClick={signOut}>Logout</Button>
                
            </div>
        </div>
    );

}

export default Header;