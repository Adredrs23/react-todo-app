import React from 'react'

export default function Blank() {
    return (
        <div style={mystyle}>
            <h1>Cannot Leave Todo-Task Blank</h1>
        </div>
    )
}

const mystyle= {
    textAlign: "center",
    color: "rgb(63, 21, 56)"
  }