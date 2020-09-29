import React, {useState}from 'react'
import { auth, db } from '../firebaseSetup'

const Authenticate = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSignUp = (e) =>{
        e.preventDefault()
        console.log("signing up",email,password)

        auth.createUserWithEmailAndPassword(email,password)
            .then( credUser => {
                return db.collection('users').doc(credUser.user.uid).set({
                    email: credUser.user.email,
                    todos:[],
                })
            })
                .catch((err)=>{console.log("error",err)})
    }

    const handleSignIn = (e) =>{
        e.preventDefault()
        console.log("signing in",email,password)

        auth.signInWithEmailAndPassword(email,password)
            .catch((err)=>{
                if(err.code === "auth/user-not-found"){
                    setErrorMessage("No user record found corresponding to this email.");
                }
                else if(err.code === "auth/wrong-password"){
                    setErrorMessage("Invalid Credentials");
                }
            })
    }

    return (
        <section>
            <form id="authenticate">
                <h3>Sign Up or Sign In</h3>
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

                <div>
                    <button onClick={handleSignUp}>Sign Up</button>
                    <button onClick={handleSignIn}>Sign In</button>
                </div>
                {
                    errorMessage && (
                        <div className="error">
                            <p>{ errorMessage }</p>
                        </div>
                    )
                }
            </form>
        </section>
        
    )
}

export default Authenticate
