import React from 'react'; 
import './Login.css'; 
import Typing from 'react-typing-animation';
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer"; 

import LoginBottomer from './LoginBottomer';


function Login() {

    const AnimatedTypingComponent = () => (
        <Typing loop={true} speed={35}>
          <span>Tesla</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={64} speed={10}/>
          <span>Microsoft</span>
          <Typing.Delay ms={3000}/>
          <Typing.Backspace count={64} speed={10} />
          <span>Boeing</span>
          <Typing.Delay ms={3000}/>
          <Typing.Backspace count={64} speed={10} />
          <span>SpaceX</span>
          <Typing.Delay ms={3000}/>
          <Typing.Backspace count={64} speed={10} />
          <span>Google</span>
          <Typing.Delay ms={3000}/>
          <Typing.Backspace count={64} speed={10} />
        </Typing>
      );


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
                <center><button className="login__googlebutton" onClick={signIn}>Login with Google</button></center>

            </div>
            <div className="explanation">
                <center><h2>Find compensations Mechanical Engineers earn from top companies such as...</h2></center>
                <center><h2><AnimatedTypingComponent /></h2></center>
                <center><h2>and many more!</h2></center>


            
            </div>
            
            

        </div>
    );

}

export default Login;