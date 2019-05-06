import React from "react"
import NavBar from "./NavBar"

class RandomBeer extends React.Component {
  render() {
    return(
      <div className="RandomBeer">
        <NavBar />
        <h1>Random Beer</h1>
      </div>
    );
  }
}

export default RandomBeer