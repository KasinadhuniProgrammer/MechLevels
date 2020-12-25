import React from 'react'; 
import './Login.css'; 

import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer"; 


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
            <div className="login__container">
                <h1 className="logincontainer__welcometext">Welcome</h1>
                <h2 className="logincontainer__totext">to</h2>
                <h1 className="logincontainer__mechlevelstext">MechLevels</h1>
                <Button onClick={signIn}>Login/Sign Up with Google</Button>
            </div>
            

        </div>
    );

}

export default Login;