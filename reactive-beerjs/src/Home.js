import React from "react"
import { Link } from "react-router-dom";


export default function Home() {
  return(
    <div className="Home">

      <Link to={"/beers"}>All Beers</Link> <br/>
      <Link to={"/random-beer"}>Random Beer</Link> <br/>
      <Link to={"/new-beer"}>New Beer</Link> <br/>
    </div>
  ) 
}