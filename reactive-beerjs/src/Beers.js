import React from "react"
import NavBar from "./NavBar"
import { Link, Route } from 'react-router-dom';
import BeerDetail from "./BeerDetail.js";
import axios from "axios"

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null
    };
  }
  render() {
    return(
      <div className="Beers">
        <NavBar />
        <h1>All Beers</h1>
        {!this.state.beers && <div>Loading...</div>}
        {this.state.beers && (
          this.state.beers.map(beer => 
          <div className="beer">
            <img src={beer.image_url} alt="" />
            <div className="beer-info">
              <h1>{beer.name}</h1>
              <h2>{beer.tagline}</h2>
              <p><strong>Creted By: </strong>{beer.contributed_by}</p>
              <Link to="/beers/:beerId">See More</Link>
            </div>
          </div>))}
        
          <Route path="/beers/:beerId" component={BeerDetail} />
      </div>   
    );
  }
  componentDidMount() {
    axios.get("https://ironbeerapi.herokuapp.com/beers/all")
      .then(response => {
      this.setState({
        beers: response.data
      })
    })
  }
}

export default Beers