import React from 'react'

export default function About() {
    return (
        <div style={mystyle} > 
            <h1 >This is a Learning Project for a beginner level student!</h1>
            <p>Understanding basics of React, its States, Props and Router.
                <br/>
            Integrates Firebase as backend using its Authentication, Firestore and Hosting services.</p>
            <ul style={ulStyle}>
                <li>Firestore Rules</li>
                <li>Firestore Data Modelling</li>
                <li>Understanding Read-Write costs of Firestore</li>
            </ul>
        </div>
    )
}

const mystyle={
    textAlign:"center",
    color:"coral",
    backgroundColor:"darkslategray",
    padding:"2rem",
    marginTop:"2rem"
}

const ulStyle = {
    textAlign:"left",
    color: "darkgoldenrod"
}
