import React from "react"
import NavBar from "./NavBar"

class NewBeer extends React.Component {
  render() {
    return(
      <div className="NewBeer">
        <NavBar />
        <h1>New Beer</h1>
      </div>
    );
  }
}

export default NewBeer