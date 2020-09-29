import React from 'react'
import { auth } from '../firebaseSetup';

const UserInfo = () => {
    return (
        <div className="header">
            <h2>{ auth.currentUser.displayName }</h2>
            <p>{ auth.currentUser.email }</p>            
            <button id="logout__btn" onClick={()=>{auth.signOut()}}>Logout</button>
        </div>
    )
}

export default UserInfo
