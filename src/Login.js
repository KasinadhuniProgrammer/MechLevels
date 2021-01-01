import React from 'react'; 
import './Login.css'; 

import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer"; 

import LoginBottomer from './LoginBottomer';


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result); //for testing purposes
                dispatch ({
                    type: actionTypes.SET_USER,
                    user: result.user,


                })
            })
            .catch(error => {
                alert(error.message)
            })

        


    }



    return (
        <div className="login">
            <div className="loginpage">
                <center><h1 className="login__header">MechLevels</h1></center>
                <center><h3 className="login__desc">Find compensations of Mechanical Engineers from top companies</h3></center>
                <center><Button className="login__googlebutton" onClick={signIn}>Login/Sign up with Google</Button></center>

            </div>
            <div className="explanation">
                <center><h1>Check out compensations from Mechanical Engineers who work at top companies such as...</h1></center>
                <center><h1>Tesla, Ford, Google, Boeing, Microsoft, Amazon, SpaceX</h1></center>
                <center><h1>and many more other great companies!</h1></center>
                <center><h1 className="addcomptext">If you are a mechanical engineer, you can add your own compensation to this website also! The best thing is, it is anonymous, and no one on the website will know who you are when you keep in your compensation</h1></center>

            
            </div>
            <LoginBottomer />
            
            

        </div>
    );

}

export default Login;