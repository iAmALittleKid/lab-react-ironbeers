import React from "react"
import { NavLink } from "react-router-dom";


export default function NavBar() {
  return(
    <div className="NavBar">
      <nav >
        <NavLink exact to="/">Home</NavLink>
      </nav>
    </div>
  ) 
}