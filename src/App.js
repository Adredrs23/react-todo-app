import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { auth } from './firebaseSetup'

import About from "./components/About"
import TodosContainer from "./components/TodosContainer"
import Header from "./components/Header"
import Authenticate from './components/Authenticate'
import UserInfo from './components/UserInfo'

import './App.css';

const App = () => {

  const [currentUser,setCurrentUser] = useState(null)

  // attach auth state listener on mount and detach on unmount
  useEffect(()=>{
    console.log("entering App.useEffect");

    const authStateListenerUnsubscribe = auth.onAuthStateChanged( userCred => {
      console.log("entering authStateListener");

      if (userCred) {
        console.log("here", userCred.email)
        setCurrentUser(userCred)
      } else {
        console.log("here", null)
        setCurrentUser(null)
      }
    }); 
    
    return ()=> {
      console.log("entering authStateListener unsubscribe");
      authStateListenerUnsubscribe();
    }

  },[])
  
  
  return (
    <Router>
        <div>
          <Header />
          <Route path="/"  exact render= { props => (
            <React.Fragment>
              {
                !currentUser && (
                  <Authenticate />
                ) 
              }
              {
                currentUser && (
                  <>
                    <UserInfo />
                    <TodosContainer />
                  </>
                )
              }
            </React.Fragment>
          )}>
          </Route>
          <Route path="/about" component={About}></Route>
        </div>
    </Router>
  )
}

export default App
