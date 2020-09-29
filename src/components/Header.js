import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <React.Fragment >
            <div className="header">
                <h1>Todo App </h1>
            </div>
            <div className="nav">
                <li><Link to="/" >Home </Link></li>
                <li><Link to="/about" >About</Link></li>
            </div>
        </React.Fragment> 
    )
}



