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
                <h1>MechLevels</h1>
                <h3>Find compensations from top companies such as: <h2><AnimatedTypingComponent /></h2></h3>
                <button onClick={signIn}>Login with Google</button>


            </div>
            
            

        </div>
    );

}

export default Login;